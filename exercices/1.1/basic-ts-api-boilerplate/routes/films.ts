import { Router } from 'express';
import { Film } from '../types';
const router = Router();

const films: Film[] = [
    {
        id: 1,
        title: 'The Blind Side',
        director: 'John Lee Hancock',
        duration: 129,
        budget: 29,
        description: 'L’histoire de Michael Oher, un adolescent afro-américain sans-abri et traumatisé, qui devient un joueur de football américain All-American et un choix de premier tour de la NFL grâce à l’aide d’une femme attentionnée et de sa famille adoptive. Le film explore son parcours depuis les rues de Memphis jusqu’à sa réussite sur le terrain de football, mettant en lumière l’importance de l’amour, du soutien familial et de la persévérance12.',
        imageUrl: 'https://example.com/???.jpg'
    },

    {
        id: 2,
        title: 'L’Esquisse de nos vies',
        director: 'Takahiro Miki',
        duration: 120,
        budget: 0,
        description: 'Akito, un jeune artiste talentueux de 17 ans, découvre qu’il ne lui reste qu’une année à vivre. Malgré ce diagnostic, il rencontre une jeune fille en phase terminale qui n’a plus que six mois à vivre. Ensemble, ils trouvent un nouveau sens à leur vie en se soutenant mutuellement et en partageant des moments précieux12.',
        imageUrl: 'https://example.com/???.jpg'
    },

    {
        id: 3,
        title: 'La ligne verte',
        director: 'Stephen King',
        duration: 189,
        budget: 60,
        description: 'Le film raconte l’histoire de Paul Edgecomb, un gardien-chef dans le couloir de la mort d’une prison en 1935. Sa vie change radicalement lorsqu’il rencontre John Coffey, un détenu condamné à mort pour le meurtre de deux jeunes filles. Coffey se révèle être un homme doux et doté de pouvoirs surnaturels, capable de guérir les malades et de faire des miracles. À travers cette rencontre, Paul et ses collègues sont confrontés à des dilemmes moraux et à des événements extraordinaires qui bouleversent leur quotidien12.',
        imageUrl: 'https://example.com/???.jpg'
    }
];

router.get("/", (_req, res) => {
    return res.json(films);
});

export default router;