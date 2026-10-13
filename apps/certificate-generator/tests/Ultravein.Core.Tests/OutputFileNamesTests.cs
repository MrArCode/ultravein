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
        // arrange

        // act
        string safeFileName = OutputFileNames.Sanitize(rawName);

        // assert
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
        // arrange
        string fallbackFileName = OutputFileNames.DefaultFallback;

        // act
        string resultFileName = OutputFileNames.Sanitize(unusableInput);

        // assert
        resultFileName.Should().Be(fallbackFileName);
    }

    [Test]
    public void Sanitize_WhenNameExceedsMaximumAllowedLength_TruncatesToMaxLength()
    {
        // arrange
        string excessivelyLongName = new string('a', 300);

        // act
        string truncatedFileName = OutputFileNames.Sanitize(excessivelyLongName);

        // assert
        truncatedFileName.Length.Should().Be(OutputFileNames.MaxLength);
    }

    [Test]
    public void Allocate_WhenGivenDuplicateNamesWithVaryingCase_AppendsIncrementalNumberSuffix()
    {
        // arrange
        OutputFileNameAllocator nameAllocator = new OutputFileNameAllocator();

        // act
        string firstAssignedName = nameAllocator.Allocate("Jan Kowalski");
        string secondDuplicateName = nameAllocator.Allocate("Jan Kowalski");
        string thirdDuplicateWithLowerCasing = nameAllocator.Allocate("jan kowalski");
        string differentPersonName = nameAllocator.Allocate("Anna Nowak");

        // assert
        firstAssignedName.Should().Be("Jan Kowalski");
        secondDuplicateName.Should().Be("Jan Kowalski (2)");
        thirdDuplicateWithLowerCasing.Should().Be("jan kowalski (3)");
        differentPersonName.Should().Be("Anna Nowak");
    }

    [Test]
    public void Allocate_WhenGivenNameWithInvalidCharacters_SanitizesBeforeCheckingForCollisions()
    {
        // arrange
        OutputFileNameAllocator nameAllocator = new OutputFileNameAllocator();

        // act
        string sanitizedInitialName = nameAllocator.Allocate("Jan/Kowalski");
        string subsequentCollidingName = nameAllocator.Allocate("Jan Kowalski");

        // assert
        sanitizedInitialName.Should().Be("Jan Kowalski");
        subsequentCollidingName.Should().Be("Jan Kowalski (2)");
    }
}
