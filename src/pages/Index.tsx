import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/3051d8e7-2234-4024-b614-41c2b560cf74/files/99deffc9-389c-4395-be15-9de8d77301fa.jpg",
    "https://cdn.poehali.dev/projects/3051d8e7-2234-4024-b614-41c2b560cf74/files/2a9548ad-b6f2-4d6c-9bba-494344b0c501.jpg",
    "https://cdn.poehali.dev/projects/3051d8e7-2234-4024-b614-41c2b560cf74/files/b1419362-7e27-4f0b-9686-a09748365337.jpg",
    "https://cdn.poehali.dev/projects/3051d8e7-2234-4024-b614-41c2b560cf74/files/a14ab254-a152-4740-8182-cc949c7fb2a4.jpg",
    "https://cdn.poehali.dev/projects/3051d8e7-2234-4024-b614-41c2b560cf74/files/45a7f35d-4b90-4a45-bf89-9e52b67ac562.jpg",
    "https://cdn.poehali.dev/projects/3051d8e7-2234-4024-b614-41c2b560cf74/files/99deffc9-389c-4395-be15-9de8d77301fa.jpg",
    "https://cdn.poehali.dev/projects/3051d8e7-2234-4024-b614-41c2b560cf74/files/2a9548ad-b6f2-4d6c-9bba-494344b0c501.jpg",
    "https://cdn.poehali.dev/projects/3051d8e7-2234-4024-b614-41c2b560cf74/files/b1419362-7e27-4f0b-9686-a09748365337.jpg",
    "https://cdn.poehali.dev/projects/3051d8e7-2234-4024-b614-41c2b560cf74/files/a14ab254-a152-4740-8182-cc949c7fb2a4.jpg",
    "https://cdn.poehali.dev/projects/3051d8e7-2234-4024-b614-41c2b560cf74/files/45a7f35d-4b90-4a45-bf89-9e52b67ac562.jpg",
    "https://cdn.poehali.dev/projects/3051d8e7-2234-4024-b614-41c2b560cf74/files/99deffc9-389c-4395-be15-9de8d77301fa.jpg",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;