using System;
using System.Collections.Generic;

namespace ArcillaWeb.Server.Models;

public partial class Product
{
    public int Id { get; set; }

    public string Reference { get; set; } = null!;

    public string? Name { get; set; }

    public int? Height { get; set; }

    public int? HeightTolerance { get; set; }

    public int? Width { get; set; }

    public int? WidthTolerance { get; set; }

    public int? Large { get; set; }

    public int? LargeTolerance { get; set; }

    public string? Use { get; set; }

    public string? Color { get; set; }

    public decimal? Weight { get; set; }

    public string? Material { get; set; }

    public string? CompressionTest { get; set; }

    public string? HumidityTest { get; set; }

    public string? AbrasionTest { get; set; }

    public decimal? Iva { get; set; }

    public string? Description { get; set; }

    public int? PerformanceM2 { get; set; }

    public string? Image { get; set; }

    public decimal? Price { get; set; }

    public string? TypeProduct { get; set; }
}
