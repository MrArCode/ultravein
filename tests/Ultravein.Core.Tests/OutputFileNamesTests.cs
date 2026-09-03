using Ultravein.Core.Output;

namespace Ultravein.Core.Tests;

public class OutputFileNamesTests
{
    [Theory]
    [InlineData("Jan Kowalski", "Jan Kowalski")]
    [InlineData("  Anna \t  Nowak  ", "Anna Nowak")]
    [InlineData("Anna Nowak", "Anna Nowak")]
    [InlineData("Łukasz Żółć-Wiśniewski", "Łukasz Żółć-Wiśniewski")]
    [InlineData("A/B:C*D?E\"F<G>H|I\\J", "A B C D E F G H I J")]
    [InlineData("Nazwisko.", "Nazwisko")]
    [InlineData(".ukryty", "ukryty")]
    [InlineData("CON", "CON_")]
    [InlineData("lpt1", "lpt1_")]
    public void Sanitize_ProducesSafeFileName(string input, string expected)
        => Assert.Equal(expected, OutputFileNames.Sanitize(input));

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("   ")]
    [InlineData("***")]
    [InlineData("...")]
    public void Sanitize_FallsBackWhenNothingUsableRemains(string? input)
        => Assert.Equal(OutputFileNames.DefaultFallback, OutputFileNames.Sanitize(input));

    [Fact]
    public void Sanitize_TruncatesVeryLongNames()
    {
        var longName = new string('a', 300);
        Assert.Equal(OutputFileNames.MaxLength, OutputFileNames.Sanitize(longName).Length);
    }

    [Fact]
    public void Allocator_AddsCounterForDuplicatesIgnoringCase()
    {
        var allocator = new OutputFileNameAllocator();

        Assert.Equal("Jan Kowalski", allocator.Allocate("Jan Kowalski"));
        Assert.Equal("Jan Kowalski (2)", allocator.Allocate("Jan Kowalski"));
        Assert.Equal("jan kowalski (3)", allocator.Allocate("jan kowalski"));
        Assert.Equal("Anna Nowak", allocator.Allocate("Anna Nowak"));
    }

    [Fact]
    public void Allocator_SanitizesBeforeAllocating()
    {
        var allocator = new OutputFileNameAllocator();

        Assert.Equal("Jan Kowalski", allocator.Allocate("Jan/Kowalski"));
        Assert.Equal("Jan Kowalski (2)", allocator.Allocate("Jan Kowalski"));
    }
}
