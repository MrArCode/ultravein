using Ultravein.Core.Output;

namespace Ultravein.Core.Tests;

[TestFixture]
public class OutputFileNamesTests
{
    [TestCase("Jan Kowalski", "Jan Kowalski")]
    [TestCase("  Anna \t  Nowak  ", "Anna Nowak")]
    [TestCase("Anna Nowak", "Anna Nowak")]
    [TestCase("Łukasz Żółć-Wiśniewski", "Łukasz Żółć-Wiśniewski")]
    [TestCase("A/B:C*D?E\"F<G>H|I\\J", "A B C D E F G H I J")]
    [TestCase("Nazwisko.", "Nazwisko")]
    [TestCase(".ukryty", "ukryty")]
    [TestCase("CON", "CON_")]
    [TestCase("lpt1", "lpt1_")]
    public void Sanitize_WhenGivenNamesWithForbiddenCharactersOrWhitespace_ReturnsCleanSafeFileName(
        string rawName, string expectedFileName)
    {
        // Arrange
        // Dane wejściowe 'rawName' oraz oczekiwany wynik 'expectedFileName' pochodzą z przypadku testowego.

        // Act
        string safeFileName = OutputFileNames.Sanitize(rawName);

        // Assert
        safeFileName.Should().Be(expectedFileName);
    }

    [TestCase(null)]
    [TestCase("")]
    [TestCase("   ")]
    [TestCase("***")]
    [TestCase("...")]
    public void Sanitize_WhenGivenNullEmptyOrUnusableString_ReturnsDefaultFallbackName(
        string? unusableInput)
    {
        // Arrange
        string fallbackFileName = OutputFileNames.DefaultFallback;

        // Act
        string resultFileName = OutputFileNames.Sanitize(unusableInput);

        // Assert
        resultFileName.Should().Be(fallbackFileName);
    }

    [Test]
    public void Sanitize_WhenNameExceedsMaximumAllowedLength_TruncatesToMaxLength()
    {
        // Arrange
        string excessivelyLongName = new string('a', 300);

        // Act
        string truncatedFileName = OutputFileNames.Sanitize(excessivelyLongName);

        // Assert
        truncatedFileName.Length.Should().Be(OutputFileNames.MaxLength);
    }

    [Test]
    public void Allocate_WhenGivenDuplicateNamesWithVaryingCase_AppendsIncrementalNumberSuffix()
    {
        // Arrange
        OutputFileNameAllocator nameAllocator = new OutputFileNameAllocator();

        // Act
        string firstAssignedName = nameAllocator.Allocate("Jan Kowalski");
        string secondDuplicateName = nameAllocator.Allocate("Jan Kowalski");
        string thirdDuplicateWithLowerCasing = nameAllocator.Allocate("jan kowalski");
        string differentPersonName = nameAllocator.Allocate("Anna Nowak");

        // Assert
        firstAssignedName.Should().Be("Jan Kowalski");
        secondDuplicateName.Should().Be("Jan Kowalski (2)");
        thirdDuplicateWithLowerCasing.Should().Be("jan kowalski (3)");
        differentPersonName.Should().Be("Anna Nowak");
    }

    [Test]
    public void Allocate_WhenGivenNameWithInvalidCharacters_SanitizesBeforeCheckingForCollisions()
    {
        // Arrange
        OutputFileNameAllocator nameAllocator = new OutputFileNameAllocator();

        // Act
        string sanitizedInitialName = nameAllocator.Allocate("Jan/Kowalski");
        string subsequentCollidingName = nameAllocator.Allocate("Jan Kowalski");

        // Assert
        sanitizedInitialName.Should().Be("Jan Kowalski");
        subsequentCollidingName.Should().Be("Jan Kowalski (2)");
    }
}
