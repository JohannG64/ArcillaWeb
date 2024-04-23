using System;
using System.Collections.Generic;

namespace ArcillaWeb.Server.Models;

public partial class Use
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    public string? Image { get; set; }
}
