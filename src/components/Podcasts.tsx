import { Card, CardContent } from "@/components/ui/card";

const videos = [
  {
    title: "United Refuah HealthShare - Kosher Money Episode",
    platform: "vimeo",
    embedUrl: "https://player.vimeo.com/video/911247341?h=a811fb7087",
    thumbnail: null,
  },
  {
    title: "Latest Talks Podcast - #56 | The Affordable Healthcare Alternative",
    platform: "youtube",
    embedUrl: "https://www.youtube.com/embed/n4qj73RFf7s",
    thumbnail: null,
  },
  {
    title: "United Refuah HealthShare Explained",
    platform: "vimeo",
    embedUrl: "https://player.vimeo.com/video/1152648697",
    thumbnail: null,
  },
];

export function Podcasts() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-primary to-primary/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Podcast & Media
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Learn more about United Refuah HealthShare through our podcast appearances and video content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden bg-white/10 border-white/20">
              <div className="aspect-video">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-white text-sm line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-xs text-white/60 mt-1 capitalize">
                  {video.platform}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
