import { Card } from "@/components/ui/card";

const VideoDemo = () => {
  const videos = [
    {
      title: "Como usar o Papuguinho",
      description: "Tutorial completo para começar a usar o aplicativo",
      videoSrc: "/videos/como-usar-papuguinho.mp4",
    },
    {
      title: "Papuguinho",
      description: "Conheça o aplicativo Papuguinho",
      videoSrc: "/videos/papuguinho-video.mp4",
    },
  ];

  return (
    <section id="videos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-primary">Vídeos Demonstrativos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Assista aos vídeos para entender melhor como o Papuguinho funciona
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {videos.map((video, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src={video.videoSrc} type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground">{video.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
