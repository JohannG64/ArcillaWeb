using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ArcillaWeb.Server.Models;

public partial class ApplicationDbContext : DbContext
{
    public ApplicationDbContext()
    {
    }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Color> Colors { get; set; }

    public virtual DbSet<Image> Images { get; set; }

    public virtual DbSet<Material> Materials { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Use> Uses { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=ConnectionStrings:dbcontextstring");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Color>(entity =>
        {
            entity.HasNoKey();

            entity.Property(e => e.Code)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("code");
            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Image>(entity =>
        {
            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Category).HasMaxLength(50);
        });

        modelBuilder.Entity<Material>(entity =>
        {
            entity.HasNoKey();

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("id");
            entity.Property(e => e.Name).HasColumnName("name");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Reference);

            entity.Property(e => e.Reference).HasMaxLength(50);
            entity.Property(e => e.Id).ValueGeneratedOnAdd();
            entity.Property(e => e.Iva)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("IVA");
            entity.Property(e => e.Material).HasMaxLength(50);
            entity.Property(e => e.Name).HasMaxLength(50);
            entity.Property(e => e.Price).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.Use).HasMaxLength(50);
            entity.Property(e => e.Weight).HasColumnType("numeric(18, 0)");
        });

        modelBuilder.Entity<Use>(entity =>
        {
            entity.HasNoKey();

            entity.Property(e => e.Description).IsUnicode(false);
            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("id");
            entity.Property(e => e.Image).IsUnicode(false);
            entity.Property(e => e.Name).HasColumnName("name");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
