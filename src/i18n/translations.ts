export type Language = 'pt' | 'en'

export interface Translation {
  nav: {
    about: string
    stack: string
    experience: string
    projects: string
    contact: string
  }
  hero: {
    greeting: string
    role: string
    roles: string[]
    tagline: string
    ctaProjects: string
    ctaContact: string
    location: string
    status: string
  }
  about: {
    title: string
    kicker: string
    paragraphs: string[]
    values: { title: string; desc: string }[]
  }
  stack: {
    title: string
    kicker: string
    subtitle: string
    groups: { label: string; items: string[] }[]
  }
  experience: {
    title: string
    kicker: string
    present: string
    items: {
      role: string
      company: string
      period: string
      location: string
      highlights: string[]
    }[]
    educationTitle: string
    education: { degree: string; school: string; period: string }[]
  }
  projects: {
    title: string
    kicker: string
    subtitle: string
    viewCode: string
    viewLive: string
    items: {
      name: string
      description: string
      tags: string[]
      repo: string
      live?: string
    }[]
  }
  contact: {
    title: string
    kicker: string
    subtitle: string
    cta: string
  }
  footer: {
    built: string
    rights: string
  }
}

const roleTags = ['Java', '.NET', 'Python', 'AWS', 'DevOps']

export const translations: Record<Language, Translation> = {
  pt: {
    nav: {
      about: 'Sobre',
      stack: 'Stack',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, eu sou',
      role: 'Desenvolvedor de Software',
      roles: [
        'Desenvolvedor de Software',
        'Backend & Integrações',
        'Automação & Cloud',
        'Java • .NET • Python',
      ],
      tagline:
        'Construo soluções simples, estáveis e que continuam funcionando depois que eu saio da call. Backend, integrações e automação — do sistema legado ao cloud-native.',
      ctaProjects: 'Ver projetos',
      ctaContact: 'Fale comigo',
      location: 'Belém, Pará — Brasil',
      status: 'Disponível para novos desafios',
    },
    about: {
      title: 'Sobre mim',
      kicker: 'Quem está por trás do código',
      paragraphs: [
        'Sou desenvolvedor de software com alguns anos de estrada — boa parte deles na Vibe Tecnologia — trabalhando com backend, integrações e automação de processos.',
        'Já passei por sistemas legados (daqueles que você respira fundo antes de mexer) e também por projetos mais modernos em cloud. Hoje transito bem entre os dois mundos: manter o que já existe funcionando e, ao mesmo tempo, evoluir sem quebrar tudo no caminho.',
        'Tenho experiência com Java, .NET e Python, atuando principalmente em sistemas do setor financeiro, incluindo projetos de crédito para o Banpará. Meu foco é construir soluções simples, estáveis e observáveis.',
      ],
      values: [
        {
          title: 'Entender antes de codar',
          desc: 'Compreendo o problema de verdade antes de sair escrevendo solução.',
        },
        {
          title: 'Automatizar o repetitivo',
          desc: 'Se dá pra automatizar e ganhar tempo, eu automatizo.',
        },
        {
          title: 'Deixar melhor do que achei',
          desc: 'Cada passagem pelo código deixa ele um pouco mais limpo.',
        },
        {
          title: 'Um bom log salva o dia',
          desc: 'Observabilidade e logs decentes valem mais que um herói.',
        },
      ],
    },
    stack: {
      title: 'Stack & Ferramentas',
      kicker: 'Com o que eu trabalho',
      subtitle:
        'Do backend robusto às pipelines de deploy — as tecnologias que uso no dia a dia.',
      groups: [
        {
          label: 'Backend',
          items: ['Java', 'Spring Boot', 'JavaEE', 'JSF / PrimeFaces', '.NET 8', 'Python'],
        },
        {
          label: 'Dados & Persistência',
          items: ['JPA / Hibernate', 'Entity Framework', 'SQL Server', 'PostgreSQL'],
        },
        {
          label: 'DevOps & Cloud',
          items: ['AWS', 'CI/CD', 'ArgoCD', 'SonarQube', 'Nexus', 'IaC'],
        },
        {
          label: 'Servidores & Build',
          items: ['JBoss', 'WebLogic', 'Tomcat', 'Maven', 'Git'],
        },
      ],
    },
    experience: {
      title: 'Experiência',
      kicker: 'Trajetória profissional',
      present: 'atual',
      items: [
        {
          role: 'Analista Desenvolvedor',
          company: 'Vibe Tecnologia',
          period: 'set 2022 — atual',
          location: 'Remoto · Belém, PA',
          highlights: [
            'Backend, DevOps e evolução de sistemas em ambientes corporativos, principalmente no setor financeiro.',
            'Projetos de Crédito – Banpará: Java 6/7, JSF (PrimeFaces), Hibernate, SQL Server, JBoss e WebLogic; otimização de performance e cache em alta disponibilidade.',
            'CI/CD na prática: build e qualidade com SonarQube, publicação de artefatos no Nexus e deploy automatizado via pipelines.',
            'Aplicação em .NET 8 (MVVM, Razor Pages, Entity Framework), com testes unitários e de integração.',
            'Equipe Python | AWS: backend em Python, integração com serviços AWS, automação de deploy com ArgoCD e infraestrutura como código.',
          ],
        },
        {
          role: 'Técnico de Hardware',
          company: 'TecnoMania Informática',
          period: 'jun 2014 — jul 2015',
          location: 'Castanhal, PA',
          highlights: [
            'Proprietário de empresa de manutenção de micros.',
            'Atendimento, suporte ao cliente e manutenção de hardware.',
          ],
        },
        {
          role: 'Professor de Programação',
          company: 'Universidade do Estado do Pará (UEPA)',
          period: 'ago 2013 — dez 2013',
          location: 'Castanhal, PA',
          highlights: [
            'Instrutor de Algoritmos e Programação em Linguagem C.',
            'Compartilhamento de conhecimento com alunos de Análise de Sistemas.',
          ],
        },
        {
          role: 'Estagiário de TI',
          company: 'FCAT — Faculdade de Castanhal',
          period: 'ago 2011 — fev 2012',
          location: 'Castanhal, PA',
          highlights: [
            'Suporte ao laboratório de informática da faculdade.',
            'Manutenção de micros e rede.',
          ],
        },
      ],
      educationTitle: 'Formação',
      education: [
        {
          degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
          school: 'Estácio — FCAT',
          period: '2014 — 2016',
        },
      ],
    },
    projects: {
      title: 'Projetos',
      kicker: 'Coisas que eu construí',
      subtitle:
        'Uma seleção de projetos pessoais e open source do meu GitHub.',
      viewCode: 'Ver código',
      viewLive: 'Ver online',
      items: [
        {
          name: 'ChangeVersionJava',
          description:
            'App desktop para quem cansou de trocar a variável de ambiente do Java na mão. Alterna a versão do Java pelo sistema com poucos cliques.',
          tags: ['C#', 'WPF', '.NET Framework'],
          repo: 'https://github.com/jubureba/ChangeVersionJava',
        },
        {
          name: 'MelodyBot',
          description:
            'Bot de música para Discord, escrito em JavaScript, com site de apresentação próprio.',
          tags: ['JavaScript', 'Discord.js', 'Node'],
          repo: 'https://github.com/jubureba/MelodyBot',
          live: 'https://melody-bot.vercel.app',
        },
        {
          name: 'FicaQuietoKalucky',
          description:
            'Bot de Discord em Python para gerenciar a movimentação de membros em servidores.',
          tags: ['Python', 'Discord', 'Automação'],
          repo: 'https://github.com/jubureba/FicaQuietoKalucky',
        },
        {
          name: 'frost-wolf-landing',
          description:
            'Landing page moderna construída em TypeScript, com deploy na Vercel.',
          tags: ['TypeScript', 'React', 'Vercel'],
          repo: 'https://github.com/jubureba/frost-wolf-landing',
          live: 'https://frost-wolf-landing.vercel.app',
        },
        {
          name: 'CRUD-WPF-EntityFramework',
          description:
            'Sistema CRUD de referência usando WPF e Entity Framework para persistência.',
          tags: ['C#', 'WPF', 'Entity Framework'],
          repo: 'https://github.com/jubureba/CRUD-WPF-ENTITYFRAMEWORK',
        },
        {
          name: 'cursomc',
          description:
            'Projeto de estudos backend em Java, explorando arquitetura em camadas e boas práticas.',
          tags: ['Java', 'Spring', 'REST'],
          repo: 'https://github.com/jubureba/cursomc',
        },
      ],
    },
    contact: {
      title: 'Vamos conversar',
      kicker: 'Contato',
      subtitle:
        'Se você também acha que um bom log salva mais que um herói, provavelmente a gente vai se dar bem. Bora trocar uma ideia?',
      cta: 'Enviar mensagem no LinkedIn',
    },
    footer: {
      built: 'Feito com React, TypeScript e Tailwind',
      rights: 'Todos os direitos reservados',
    },
  },
  en: {
    nav: {
      about: 'About',
      stack: 'Stack',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Software Developer',
      roles: [
        'Software Developer',
        'Backend & Integrations',
        'Automation & Cloud',
        'Java • .NET • Python',
      ],
      tagline:
        'I build simple, stable solutions that keep running long after I leave the call. Backend, integrations and automation — from legacy systems to cloud-native.',
      ctaProjects: 'View projects',
      ctaContact: 'Get in touch',
      location: 'Belém, Pará — Brazil',
      status: 'Open to new challenges',
    },
    about: {
      title: 'About me',
      kicker: 'The person behind the code',
      paragraphs: [
        'I am a software developer with a few years on the road — most of them at Vibe Tecnologia — working with backend, integrations and process automation.',
        "I've handled legacy systems (the kind you take a deep breath before touching) and also more modern cloud projects. Today I move comfortably between both worlds: keeping what already works running while evolving it without breaking everything along the way.",
        'I have experience with Java, .NET and Python, working mainly on financial-sector systems, including credit projects for Banpará. My focus is building simple, stable and observable solutions.',
      ],
      values: [
        {
          title: 'Understand before coding',
          desc: 'I get to the real problem before writing any solution.',
        },
        {
          title: 'Automate the repetitive',
          desc: 'If it can be automated to save time, I automate it.',
        },
        {
          title: 'Leave it better than I found it',
          desc: 'Every pass through the code makes it a little cleaner.',
        },
        {
          title: 'A good log saves the day',
          desc: 'Observability and decent logs beat being a hero.',
        },
      ],
    },
    stack: {
      title: 'Stack & Tools',
      kicker: 'What I work with',
      subtitle:
        'From robust backends to deploy pipelines — the technologies I use every day.',
      groups: [
        {
          label: 'Backend',
          items: ['Java', 'Spring Boot', 'JavaEE', 'JSF / PrimeFaces', '.NET 8', 'Python'],
        },
        {
          label: 'Data & Persistence',
          items: ['JPA / Hibernate', 'Entity Framework', 'SQL Server', 'PostgreSQL'],
        },
        {
          label: 'DevOps & Cloud',
          items: ['AWS', 'CI/CD', 'ArgoCD', 'SonarQube', 'Nexus', 'IaC'],
        },
        {
          label: 'Servers & Build',
          items: ['JBoss', 'WebLogic', 'Tomcat', 'Maven', 'Git'],
        },
      ],
    },
    experience: {
      title: 'Experience',
      kicker: 'Professional journey',
      present: 'present',
      items: [
        {
          role: 'Developer Analyst',
          company: 'Vibe Tecnologia',
          period: 'Sep 2022 — present',
          location: 'Remote · Belém, BR',
          highlights: [
            'Backend, DevOps and system evolution in corporate environments, mainly in the financial sector.',
            'Banpará Credit Projects: Java 6/7, JSF (PrimeFaces), Hibernate, SQL Server, JBoss and WebLogic; performance tuning and caching for high availability.',
            'CI/CD in practice: builds and quality gates with SonarQube, artifact publishing to Nexus and automated pipeline deploys.',
            '.NET 8 application (MVVM, Razor Pages, Entity Framework) with unit and integration tests.',
            'Python | AWS team: Python backend, AWS service integration, deploy automation with ArgoCD and infrastructure as code.',
          ],
        },
        {
          role: 'Hardware Technician',
          company: 'TecnoMania Informática',
          period: 'Jun 2014 — Jul 2015',
          location: 'Castanhal, BR',
          highlights: [
            'Owner of a computer maintenance business.',
            'Customer support and hardware maintenance.',
          ],
        },
        {
          role: 'Programming Teacher',
          company: 'Pará State University (UEPA)',
          period: 'Aug 2013 — Dec 2013',
          location: 'Castanhal, BR',
          highlights: [
            'Instructor for Algorithms and C Programming.',
            'Sharing knowledge with Systems Analysis students.',
          ],
        },
        {
          role: 'IT Intern',
          company: 'FCAT — Castanhal College',
          period: 'Aug 2011 — Feb 2012',
          location: 'Castanhal, BR',
          highlights: [
            "Support for the college's computer lab.",
            'Computer and network maintenance.',
          ],
        },
      ],
      educationTitle: 'Education',
      education: [
        {
          degree: "Technologist in Systems Analysis and Development",
          school: 'Estácio — FCAT',
          period: '2014 — 2016',
        },
      ],
    },
    projects: {
      title: 'Projects',
      kicker: 'Things I built',
      subtitle: 'A selection of personal and open source projects from my GitHub.',
      viewCode: 'View code',
      viewLive: 'Live demo',
      items: [
        {
          name: 'ChangeVersionJava',
          description:
            'Desktop app for anyone tired of switching the Java environment variable by hand. Change your Java version system-wide in a few clicks.',
          tags: ['C#', 'WPF', '.NET Framework'],
          repo: 'https://github.com/jubureba/ChangeVersionJava',
        },
        {
          name: 'MelodyBot',
          description:
            'A Discord music bot written in JavaScript, with its own showcase website.',
          tags: ['JavaScript', 'Discord.js', 'Node'],
          repo: 'https://github.com/jubureba/MelodyBot',
          live: 'https://melody-bot.vercel.app',
        },
        {
          name: 'FicaQuietoKalucky',
          description:
            'A Python Discord bot to manage member movement across servers.',
          tags: ['Python', 'Discord', 'Automation'],
          repo: 'https://github.com/jubureba/FicaQuietoKalucky',
        },
        {
          name: 'frost-wolf-landing',
          description:
            'A modern landing page built with TypeScript and deployed on Vercel.',
          tags: ['TypeScript', 'React', 'Vercel'],
          repo: 'https://github.com/jubureba/frost-wolf-landing',
          live: 'https://frost-wolf-landing.vercel.app',
        },
        {
          name: 'CRUD-WPF-EntityFramework',
          description:
            'A reference CRUD system using WPF and Entity Framework for persistence.',
          tags: ['C#', 'WPF', 'Entity Framework'],
          repo: 'https://github.com/jubureba/CRUD-WPF-ENTITYFRAMEWORK',
        },
        {
          name: 'cursomc',
          description:
            'A backend study project in Java, exploring layered architecture and best practices.',
          tags: ['Java', 'Spring', 'REST'],
          repo: 'https://github.com/jubureba/cursomc',
        },
      ],
    },
    contact: {
      title: "Let's talk",
      kicker: 'Contact',
      subtitle:
        'If you also think a good log saves the day more than a hero does, we will probably get along. Want to chat?',
      cta: 'Message me on LinkedIn',
    },
    footer: {
      built: 'Built with React, TypeScript and Tailwind',
      rights: 'All rights reserved',
    },
  },
}

export const heroRoleTags = roleTags
