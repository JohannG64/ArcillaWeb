using System;
using System.Collections.Generic;

namespace ArcillaWeb.Server.Models;

public partial class Image
{
    public int Id { get; set; }

    public string Category { get; set; } = null!;

    public string Link { get; set; } = null!;
}
