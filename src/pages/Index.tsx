import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", 
    "UI/UX Design", "Figma", "Tailwind CSS", "Git"
  ];

  const projects = [
    {
      id: 1,
      title: "Это я",
      description: "Художественные портреты и креативные фотосессии",
      tags: ["Photography", "Portrait", "Creative"],
      image: "https://cdn.poehali.dev/files/7ce40247-4f20-47d1-922f-99f2831dc431.jpg"
    },
    {
      id: 2,
      title: "Стильные образы",
      description: "Fashion фотография и работа с образами",
      tags: ["Fashion", "Style", "Portrait"],
      image: "https://cdn.poehali.dev/files/32dba26a-75bf-4a77-b36c-79faf33e3e4e.jpg"
    },
    {
      id: 3,
      title: "Яркие моменты",
      description: "Эмоциональные и живые фотосессии",
      tags: ["Lifestyle", "Emotions", "Colors"],
      image: "https://cdn.poehali.dev/files/7b010273-c41b-4275-bd98-da8bc051fd11.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-scale-in">
              Привет, я Алиса Смирнова
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-slide-up">
              Создаю современные веб-приложения и превращаю идеи в реальность
            </p>
          </div>
          
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105">
              <Icon name="Mail" size={20} className="mr-2" />
              Связаться
            </Button>
            <Button size="lg" variant="outline" className="border-2 transition-all hover:scale-105">
              <Icon name="Github" size={20} className="mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Обо мне</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Опытный fullstack разработчик с фокусом на создание качественных 
              пользовательских интерфейсов и масштабируемых решений
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Code" size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Разработка</h3>
                <p className="text-muted-foreground">
                  Создаю высокопроизводительные веб-приложения с использованием 
                  современных технологий и лучших практик программирования
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Icon name="Palette" size={24} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold">Дизайн</h3>
                <p className="text-muted-foreground">
                  Проектирую интуитивно понятные интерфейсы, которые радуют 
                  пользователей и решают бизнес-задачи
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-center">Навыки и технологии</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:scale-110 transition-transform cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Проекты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Некоторые из моих последних работ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-primary via-accent to-secondary">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-white/90">
            Свяжитесь со мной, и давайте создадим что-то потрясающее вместе
          </p>
          <Button size="lg" variant="secondary" className="bg-white hover:bg-white/90 text-foreground transition-all hover:scale-105">
            <Icon name="Send" size={20} className="mr-2" />
            Написать мне
          </Button>
        </div>
      </section>

      <footer className="py-8 px-4 bg-background border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">© 2024 Алиса Смирнова. Все права защищены</p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <Icon name="Github" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <Icon name="Linkedin" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <Icon name="Mail" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;