// ============================================================
//  Evo — LE CONTENU (c'est ce fichier que tu modifies)
//  Chaque ligne entre guillemets = un message.
//  Astuce : remplace quelques messages par vos souvenirs,
//  vos blagues à vous, des surnoms... c'est ce qui fera la différence.
// ============================================================

const CONFIG = {
  prenom: "Eléa",
  naissance: "2013-12-27",      // AAAA-MM-JJ
  signature: "Papa",
  pinPapa: "4826",              // ⚠️ CHANGE-LE : code du mode papa (5 tapes sur le E)
};

// ---------- MOT DU JOUR (un par jour, sans répétition avant d'avoir tout vu) ----------
const MOTS = [
  "Tu sais ce qui est rare ? Quelqu'un qui écoute vraiment. Toi, tu le fais. Garde ça.",
  "Aujourd'hui, essaie un truc qui te fait un peu peur. Le courage, ça se muscle.",
  "Tes dessins disent des choses que les mots n'arrivent pas à dire. Continue.",
  "Une fille qui lit ne s'ennuie jamais vraiment. Tu as des mondes entiers dans la tête.",
  "Je suis fier de toi. Pas pour une note, pas pour un truc précis. Juste pour qui tu es.",
  "Tu as le droit de ne pas être parfaite. Personne ne l'est. Même pas ton père (surtout pas ton père).",
  "Si quelqu'un te fait douter de toi aujourd'hui : il ne te connaît pas comme moi je te connais.",
  "Ton humour est une arme. Utilise-la pour faire rire, jamais pour blesser.",
  "Les gens les plus intéressants sont un peu bizarres. Bonne nouvelle : tu es très intéressante.",
  "Un mauvais jour, ce n'est pas une mauvaise vie. Demain, on recommence.",
  "Bois de l'eau, range ton sac, et souviens-toi que tu es géniale. Dans cet ordre ou pas.",
  "Tu grandis vite. Trop vite, si tu veux mon avis. Mais tu grandis bien.",
  "Il n'y a pas de question bête. Il y a juste des gens qui n'osent pas la poser. Ose.",
  "Ce que tu crées avec un crayon, personne d'autre au monde ne peut le créer pareil.",
  "Être gentille, ce n'est pas être faible. C'est même le contraire.",
  "Aujourd'hui, regarde le ciel au moins une fois. Ça remet les problèmes à leur taille.",
  "Tu as un super-pouvoir : quand tu t'y mets vraiment, rien ne te résiste.",
  "Les erreurs, c'est le brouillon de la réussite. Rature tranquille.",
  "Choisis tes amis comme tes livres : ceux qui te donnent envie de tourner la page.",
  "Tu n'as pas besoin de plaire à tout le monde. Plais-toi à toi d'abord.",
  "Quand tu ris vraiment, toute la pièce s'allume. C'est scientifiquement prouvé (par moi).",
  "Ta curiosité t'emmènera loin. Garde-la allumée.",
  "Je ne te le dis peut-être pas assez : je t'aime. Voilà. C'est écrit, c'est officiel.",
  "Sois la personne que tu aurais aimé croiser le jour où ça n'allait pas.",
  "Tu as le droit de dire non. De changer d'avis. De prendre ton temps.",
  "Un chapitre par jour, un dessin par semaine, et tu deviens quelqu'un d'unique. Ah, tu l'es déjà.",
  "Aujourd'hui, fais un compliment à quelqu'un. Ça revient toujours, comme un boomerang.",
  "Les héros des livres que tu aimes ont tous un point commun : ils ont continué. Toi aussi.",
  "Ce n'est pas grave d'avoir peur. Ce qui compte, c'est ce que tu fais avec.",
  "Tu es plus forte que tu ne le crois. Je l'ai vu plein de fois.",
  "Pose ton téléphone 10 minutes et regarde autour de toi. Le monde est un bon dessin à faire.",
  "Tu mérites des gens qui te tirent vers le haut. Ne te contente pas de moins.",
  "Chaque année tu deviens un peu plus toi. Et j'aime beaucoup ce que je vois.",
  "Le meilleur est devant toi. Vraiment.",
  "Aujourd'hui, sois fière d'un petit truc. Même minuscule. Ça compte.",
  "Si tu doutes, relis ce message : quelqu'un croit en toi à 1000 %. C'est moi.",
  "Ton style, ta façon de voir, ta façon de dessiner : ne les copie sur personne.",
  "La vie, c'est comme un bon livre : les passages difficiles rendent la suite meilleure.",
  "Tu n'es pas seule. Jamais. Même quand je ne suis pas là.",
  "Fais aujourd'hui un truc que l'Eléa de dans 10 ans te remerciera d'avoir fait.",
];

// ---------- BLAGUE DU JOUR (q = question, r = réponse cachée) ----------
const BLAGUES = [
  { q: "Pourquoi les plongeurs plongent-ils toujours en arrière ?", r: "Parce que sinon, ils tombent dans le bateau." },
  { q: "Quel est le comble pour un électricien ?", r: "De ne pas être au courant." },
  { q: "Qu'est-ce qui est jaune et qui attend ?", r: "Jonathan." },
  { q: "Que fait une fraise sur un cheval ?", r: "Tagada, tagada." },
  { q: "Pourquoi les livres ont-ils toujours chaud ?", r: "Parce qu'ils ont une couverture." },
  { q: "Que dit un 0 à un 8 ?", r: "Jolie ceinture !" },
  { q: "Pourquoi les poissons détestent l'ordinateur ?", r: "À cause du Net." },
  { q: "Quel est l'animal le plus heureux ?", r: "Le hibou, parce que sa femme est chouette." },
  { q: "Que dit une imprimante dans l'eau ?", r: "J'ai papier !" },
  { q: "Pourquoi le livre de maths est-il triste ?", r: "Parce qu'il a trop de problèmes." },
  { q: "Comment on allume un barbecue en Bretagne ?", r: "Avec des Breizh." },
  { q: "Qu'est-ce qui a des dents mais ne mange jamais ?", r: "Un peigne." },
  { q: "Pourquoi l'épouvantail a-t-il gagné un prix ?", r: "Parce qu'il était le meilleur dans son champ." },
  { q: "Comment appelle-t-on un boomerang qui ne revient pas ?", r: "Un bout de bois." },
  { q: "Pourquoi les fantômes sont-ils de très mauvais menteurs ?", r: "Parce qu'on voit à travers eux." },
  { q: "Que mange un monstre au petit-déjeuner ?", r: "Des croque-monsieur. Avec le monsieur." },
  { q: "Pourquoi les squelettes ne se battent jamais ?", r: "Parce qu'ils n'ont pas les tripes." },
  { q: "Pourquoi le livre est-il allé chez le médecin ?", r: "Parce qu'il avait mal au dos." },
  { q: "Que dit un mur à un autre mur ?", r: "On se retrouve au coin." },
  { q: "Comment appelle-t-on un chien qui fait de la magie ?", r: "Un labracadabrador." },
  { q: "Qu'est-ce qui monte et qui descend sans bouger ?", r: "Un escalier." },
  { q: "Pourquoi les crayons de couleur ne se disputent jamais ?", r: "Parce qu'ils savent rester dans les lignes." },
  { q: "Comment reconnaît-on une blague de papa ?", r: "Tu lèves les yeux au ciel… mais tu souris quand même. Comme là." },
  { q: "Quel est le comble pour un jardinier ?", r: "De raconter des salades." },
  { q: "Pourquoi les vampires détestent l'ail ?", r: "Parce que ça leur donne mauvaise haleine… pour mordre." },
  { q: "Que dit un escargot sur le dos d'une tortue ?", r: "Wouhouuu, ça va trop vite !" },
  { q: "Qu'est-ce qu'un crocodile qui surveille la pharmacie ?", r: "Un Lacoste-garde." },
  { q: "Pourquoi les mathématiciens détestent la plage ?", r: "Parce qu'il y a trop de sinus et de cosinus… et de tangentes." },
];

// ---------- J'AI BESOIN DE... ----------
const BESOINS = {
  courage: {
    label: "du courage", emoji: "⚡",
    messages: [
      "Le courage, ce n'est pas ne pas avoir peur. C'est y aller quand même. Et tu sais faire.",
      "Respire. Tu as déjà traversé des trucs plus durs que celui-là.",
      "Imagine-moi juste derrière toi, les bras croisés, en train de dire : « Elle va gérer. »",
      "Un pas. Juste un. Le reste suivra.",
      "Tu n'as pas besoin d'être sûre de toi pour avancer. Avance, l'assurance arrive en route.",
      "Les héroïnes de tes livres avaient peur aussi. C'est pour ça qu'on les aime.",
    ],
  },
  stress: {
    label: "me déstresser (contrôle…)", emoji: "📝",
    messages: [
      "Une note ne dit pas qui tu es. Elle dit juste ce que tu savais ce jour-là, sur ce sujet-là.",
      "Inspire 4 secondes, bloque 4, souffle 4. Trois fois. Ensuite, première question.",
      "Commence par ce que tu sais. Le cerveau se réveille en marchant.",
      "Tu as révisé plus que tu ne le crois. Fais-toi confiance.",
      "Quoi qu'il arrive à ce contrôle, ce soir je serai toujours aussi fier de toi.",
      "Relis bien la consigne. C'est souvent là que se cache la moitié de la réponse.",
    ],
  },
  triste: {
    label: "du réconfort", emoji: "🌧️",
    messages: [
      "Tu as le droit d'être triste. Ça passera. Et en attendant, je suis là.",
      "Les jours gris finissent toujours. Toujours.",
      "Mets ton casque, ta musique, prends un crayon. Laisse sortir ce qui doit sortir.",
      "Si tu veux en parler, écris-moi. Même juste un emoji. Je comprendrai.",
      "Ce que tu ressens est important. Toi, tu es importante.",
      "Pleurer, ce n'est pas être faible. C'est être vivante.",
    ],
  },
  manque: {
    label: "papa", emoji: "📻",
    messages: [
      "Moi aussi, tu me manques. Envoie-moi un message, n'importe lequel.",
      "Je pense à toi. Là, maintenant. Promis.",
      "On compte les dodos, et on se fait un truc bien la prochaine fois. Tu choisis.",
      "Même loin, je suis dans ton équipe. Toujours.",
      "Ferme les yeux trois secondes : c'est un câlin à distance. Voilà, livré.",
    ],
  },
  fiere: {
    label: "fêter un truc !", emoji: "🏆",
    messages: [
      "OUI ! Je le savais. Raconte-moi tout ce soir !",
      "Tu vois ? Tu vois ?! Je te l'avais dit.",
      "Moment de fierté officiel enregistré. Le papa est content.",
      "Ça, ça mérite une danse ridicule. Je la ferai quand je te verrai.",
      "Bravo. Et souviens-toi de ce moment le jour où tu douteras.",
    ],
  },
};

// ---------- SURPRISES DU CALENDRIER (MM-JJ) ----------
// Ajoute tes propres dates (veille de brevet, vacances ensemble...).
const SURPRISES = {
  "12-26": { titre: "Demain…", texte: "Demain, tu as 13 ans. Dernière nuit en tant qu'enfant officielle. Profite. 🌙" },
  "12-27": { titre: "JOYEUX ANNIVERSAIRE", texte: "13 ans. Bienvenue chez les ados. Je suis fier de chaque année que tu as vécue, et j'ai hâte de voir les suivantes. Je t'aime. — Papa", fete: true },
  "12-24": { titre: "Réveillon", texte: "Ce soir, on oublie tout et on profite. Joyeux Noël, ma grande. 🎄" },
  "12-25": { titre: "Joyeux Noël", texte: "Le plus beau cadeau, c'est toi (oui, c'est niais, mais c'est vrai)." },
  "01-01": { titre: "Bonne année", texte: "Une nouvelle année entière à remplir. Fais-en un chef-d'œuvre." },
  "10-31": { titre: "Halloween", texte: "Ce soir, les monstres sortent. Mais rien n'est plus fort que toi. 🎃" },
  "09-01": { titre: "C'est la rentrée", texte: "Nouvelle année, nouveaux chapitres. Tu vas tout gérer." },
};
