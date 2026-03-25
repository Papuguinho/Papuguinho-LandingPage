import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Shield, UserCheck, Database, Ban, Lock, Trash2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    icon: Shield,
    title: "1. Introdução e Compromisso com a Privacidade",
    content:
      "O aplicativo Papuguinho tem o compromisso rigoroso de proteger a privacidade de seus usuários, especialmente do público infantil. Esta Política de Privacidade foi elaborada em total conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018), o Estatuto da Criança e do Adolescente (ECA Digital - Lei nº 15.211/2025) e a Política de Famílias do Google Play (Google Play Families Policy).",
  },
  {
    icon: UserCheck,
    title: "2. O Papel do Adulto Responsável",
    content:
      "O Papuguinho é uma ferramenta educativa. Para garantir a segurança infantil, não permitimos que crianças criem contas de forma autônoma. Todo o processo de cadastro, gerenciamento de perfis e inserção de dados deve ser realizado exclusivamente por um adulto responsável (pais ou tutores legais). Ao preencher o formulário de perfil, o adulto concede o consentimento verificável para o processamento dos dados estruturais visando a experiência educativa.",
  },
  {
    icon: Database,
    title: "3. Dados Coletados e Finalidade",
    content:
      "Coletamos o mínimo de informações necessárias para o funcionamento adequado e a personalização pedagógica do aplicativo. Os dados inseridos pelo adulto responsável incluem:",
    items: [
      { label: "E-mail e Senha", desc: "Utilizados estritamente para a criação da conta do responsável, autenticação segura e recuperação de acesso." },
      { label: "Nome / Nome Completo", desc: 'Utilizado apenas localmente como "Display Name" (nome de exibição) para tornar a interface acolhedora para a criança.' },
      { label: "Data de Nascimento e Nível Escolar", desc: "Utilizados de forma anonimizada pelo sistema do aplicativo para adequar a dificuldade das atividades, sugerir conteúdos apropriados para a faixa etária e personalizar a jornada pedagógica." },
      { label: "Gênero", desc: "Utilizado exclusivamente para a adaptação da interface visual e filtragem dos pictogramas apresentados no aplicativo." },
      { label: "Motivo de Uso", desc: "Utilizado internamente para fins de pesquisa e melhoria contínua da experiência educacional oferecida pelo Papuguinho." },
      { label: "Mensagens", desc: "Coletamos e armazenamos o conteúdo das interações para compor o histórico de mensagens. A finalidade exclusiva deste recurso é permitir que o tutor ou responsável monitore as mensagens geradas pela criança, garantindo um ambiente seguro e possibilitando o acompanhamento pedagógico ou de segurança." },
      { label: "Pictogramas Personalizados", desc: "Para permitir a personalização da experiência, armazenamos as fotos e nomes enviados pelo usuário para a criação de novos pictogramas. Esses dados são de uso exclusivo do perfil que os criou, garantindo que nenhum outro usuário da plataforma tenha acesso a conteúdos privados ou as imagens carregadas." },
    ],
  },
  {
    icon: Ban,
    title: "4. O Que NÃO Fazemos com os Dados",
    content: "Para garantir a integridade do público infantil, declaramos que o Papuguinho:",
    bullets: [
      "Não vende, aluga ou compartilha dados pessoais com terceiros ou corretoras de dados.",
      "Não utiliza os dados coletados para criar perfis comportamentais com finalidade comercial.",
      "Não exibe anúncios direcionados (targeted ads) ou publicidade baseada em interesses de menores de idade.",
      "Não rastreia a localização física (GPS) do usuário.",
    ],
  },
  {
    icon: Lock,
    title: "5. Armazenamento e Segurança",
    content:
      "Os dados são armazenados em infraestrutura de nuvem de alta confiabilidade, utilizando os serviços Google Firebase (Firestore e Authentication). Aplicamos altos padrões de criptografia e segurança cibernética, com regras de acesso estritas que garantem que apenas o adulto autenticado possa acessar ou modificar o perfil vinculado à sua conta.",
    bullets: [
      "Autenticação: Utilizamos o Firebase Auth para garantir que o acesso seja restrito a usuários validados por e-mail e senha.",
      "Banco de Dados: As informações são processadas no Cloud Firestore, que conta com camadas de proteção de dados em repouso e em trânsito.",
    ],
    firebaseLink: true,
  },
  {
    icon: Trash2,
    title: "6. Direitos do Usuário (Exclusão de Dados)",
    content:
      "Em conformidade com a Lei Geral de Proteção de Dados (LGPD), o adulto responsável detém total controle sobre as informações processadas no Papuguinho. Você pode visualizar, editar ou solicitar a exclusão permanente de sua conta e de todos os perfis associados a qualquer momento.",
    deleteAccount: true,
  },
  {
    icon: MessageCircle,
    title: "7. Contato",
    content: "Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos os dados de sua família, entre em contato conosco através do e-mail:",
    email: "papuguinho@gmail.com",
  },
];

const Privacidade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Button variant="ghost" asChild className="mb-8 gap-2 text-muted-foreground hover:text-primary">
          <Link to="/">
            <ArrowLeft size={18} />
            Voltar ao Início
          </Link>
        </Button>

        <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-2">
          Política de Privacidade
        </h1>
        <p className="text-center text-muted-foreground mb-10">
          Última atualização: Março de 2026
        </p>

        <div className="space-y-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.title} className="bg-card rounded-lg border p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-foreground">{section.title}</h2>
                </div>

                <p className="text-muted-foreground leading-relaxed">{section.content}</p>

                {section.items && (
                  <ul className="mt-4 space-y-3">
                    {section.items.map((item) => (
                      <li key={item.label} className="pl-4 border-l-2 border-primary/30">
                        <span className="font-semibold text-foreground">{item.label}:</span>{" "}
                        <span className="text-muted-foreground">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.bullets && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5 text-xs">●</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {section.firebaseLink && (
                  <p className="mt-4 text-muted-foreground">
                    Políticas de Terceiros: Para mais detalhes sobre como o Google protege os dados em sua infraestrutura, você pode consultar a{" "}
                    <a
                      href="https://firebase.google.com/support/privacy?hl=pt-br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 underline underline-offset-4 hover:text-green-500 font-medium"
                    >
                      Privacidade e Segurança no Firebase
                    </a>.
                  </p>
                )}

                {section.deleteAccount && (
                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Como excluir sua conta permanentemente?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Ao optar pela exclusão da conta, o usuário declara estar ciente de que todos os seus dados, perfis de crianças, pictogramas personalizados e históricos serão removidos definitivamente de nossa base de dados, não sendo possível a recuperação posterior.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mt-3">
                        Para realizar a exclusão direta pelo aplicativo, siga o fluxo:
                      </p>
                      <ol className="mt-2 space-y-1 list-decimal list-inside text-muted-foreground">
                        <li>Acesse o menu <span className="font-semibold text-foreground">Perfil</span>;</li>
                        <li>Selecione a opção <span className="font-semibold text-foreground">Excluir Conta</span>;</li>
                        <li>Leia o aviso e clique em <span className="font-semibold text-foreground">Confirmar Exclusão</span>;</li>
                        <li>Realize a <span className="font-semibold text-foreground">Autenticação da escolha</span> (reentrada de senha ou biometria).</li>
                      </ol>
                      <p className="mt-3 text-muted-foreground leading-relaxed bg-muted/50 rounded-md p-3 border">
                        <span className="font-semibold text-foreground">Nota de Segurança:</span> Por segurança, o Firebase exige que o usuário tenha feito login recentemente para realizar operações sensíveis como a exclusão. Caso o aplicativo informe que a "sessão está expirada", basta realizar o <span className="font-semibold">Logout (Sair)</span>, efetuar o <span className="font-semibold">Login</span> novamente e repetir o processo de exclusão.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-foreground mb-2">Como excluir apenas o histórico de mensagens?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Caso deseje manter a conta ativa, mas limpar as interações registradas, siga estes passos:
                      </p>
                      <ol className="mt-2 space-y-1 list-decimal list-inside text-muted-foreground">
                        <li>Acesse o menu <span className="font-semibold text-foreground">Perfil</span>;</li>
                        <li>Clique em <span className="font-semibold text-foreground">Histórico</span>;</li>
                        <li>Realize a <span className="font-semibold text-foreground">Autenticação</span> para acesso à área restrita;</li>
                        <li>Clique no ícone da <span className="font-semibold text-foreground">Lixeira</span>;</li>
                        <li>Selecione <span className="font-semibold text-foreground">Confirmar Exclusão</span>.</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="font-bold text-foreground mb-2">Canal de Atendimento</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Você também pode exercer seus direitos de acesso ou exclusão entrando em contato diretamente com nossa equipe através do e-mail de suporte{" "}
                        <a href="mailto:papuguinho@gmail.com" className="inline-flex items-center gap-1 text-primary hover:underline font-medium">
                          <Mail size={14} />
                          papuguinho@gmail.com
                        </a>.
                      </p>
                    </div>
                  </div>
                )}

                {section.email && (
                  <a
                    href={`mailto:${section.email}`}
                    className="inline-flex items-center gap-2 mt-3 text-primary hover:underline font-medium"
                  >
                    <Mail size={16} />
                    {section.email}
                  </a>
                )}
              </section>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 mb-4">
          © 2024 Papuguinho. Todos os direitos reservados.
        </p>
      </div>
    </main>
  );
};

export default Privacidade;
