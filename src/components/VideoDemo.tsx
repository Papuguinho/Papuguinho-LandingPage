import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoDemo = () => {
  const videos = [
    {
      title: "Como usar o Papuguinho",
      description: "Tutorial completo para começar a usar o aplicativo",
      duration: "5:23",
    },
    {
      title: "Criando pranchas personalizadas",
      description: "Aprenda a adaptar o app às necessidades da criança",
      duration: "4:15",
    },
    {
      title: "Depoimento de Especialistas",
      description: "Fonoaudiólogos falam sobre CAA e o Papuguinho",
      duration: "8:42",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <Play className="h-16 w-16 text-white relative z-10 group-hover:scale-110 transition-transform" />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
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
