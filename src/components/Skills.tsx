import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 85, icon: "🟨" },
        { name: "HTML/CSS", level: 85, icon: "🎨" },
        { name: "Redux", level: 80, icon: "🔄" },
        // { name: "React Router", level: 85, icon: "🛣️" },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Java", level: 30, icon: "☕" },
        // { name: "SQL", level: 60, icon: "🗃️" },
        { name: "MySQL", level: 60, icon: "🐬" },
        // { name: "REST APIs", level: 80, icon: "🔗" },
      ],
    },
    {
      title: "Tools & Libraries",
      skills: [
        { name: "Ant Design", level: 85, icon: "🐜" },
        { name: "Git", level: 80, icon: "📚" },
        { name: "VS Code", level: 90, icon: "💻" },
      ],
    },
  ];

  const certifications = [
    {
      title: "Software Development",
      issuer: "jSpider Institute, Bengaluru",
      description:
        "Certificate Course Focused on advanced concepts of Frontend and backend development",
    },
    {
      title: "React - The Complete Guide",
      issuer: "Udemy | Maximilian Schwarzmuller",
      description:
        "Comprehensive course on React, covering advanced topics like Hooks, React Router, and Redux",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Proficiency
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and mastery of modern web development
            technologies and best practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="group hover:shadow-lg transition-all duration-300 hover:shadow-primary/20 bg-gradient-secondary border-border/50"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">
            Certifications &{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Learning
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:shadow-primary/20 bg-gradient-secondary border-border/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
