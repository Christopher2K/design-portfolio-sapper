declare namespace Raw {
  type PrismisRichText = unknown[];

  type PrismicImage = {
    url: string;
  };

  type CarouselItem = {
    image: PrismicImage;
    text_background: "dark" | "light";
    title: string;
  };

  type HomepageData = {
    carousel_items: CarouselItem[];
    footer: PrismisRichText;
    full_name: string;
    job_name: string;
    mail: string;
  };
}
