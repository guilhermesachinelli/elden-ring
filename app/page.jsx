

"use client";
import next from "next";
import Image from "next/image";
import Header from "./components/header/Header";
import styles from "./page.module.css"
import CardIndex from "./components/cardIndex/CardIndex";

export default function Home() {
  return (
    <div className={styles.bckg}>
      <Header />
      <div>
        <img src="https://cdn11.bigcommerce.com/s-1lneulkq0h/images/stencil/original/image-manager/elden-ring-landing-page-1920-x-500.png?t=1673436065" className={styles.banner}></img>
      </div>
      <div className={styles.infoJogo}>
        <div className={styles.info1}>
          <h1 className={styles.title1}>Conheça o jogo:</h1>
          <p className={styles.P}>
            Elden Ring é um jogo de RPG de ação desenvolvido pela FromSoftware e publicado pela Bandai Namco Entertainment.
            Ele foi altamente antecipado devido à colaboração entre o escritor George R.R. Martin (conhecido por "A Song of Ice and Fire")
            e o diretor de jogos Hidetaka Miyazaki.

            O jogo se passa em um mundo de fantasia chamado "The Lands Between" e oferece um vasto mundo aberto para explorar. Os jogadores
            assumem o papel de um personagem criado por eles e embarcam em uma jornada para desvendar segredos, derrotar inimigos e chefes
            desafiadores, e coletar objetos mágicos.

            Elden Ring é conhecido por seu combate desafiador e pela narrativa rica, incorporando elementos de mitologia e fantasia sombria.
            Além disso, o jogo oferece montarias que podem ser usadas para explorar o mundo aberto e travar batalhas épicas.
          </p>
        </div>
        <div className={styles.video}>
          <img src="/introgif.gif"></img>
        </div>
      </div>
      <h1 className={styles.title2}>O que você vai encontrar em nosso site?</h1>
      <div className={styles.infoApi}>
          <CardIndex
          categoria="Chefes do jogo"
          link="https://i.pinimg.com/564x/c6/6c/de/c66cde39cedd5fe987014f5eb7980cb2.jpg"
          texto="Adversários de alto nível que geralmente são o ponto central de batalhas significativas e desafiadoras. Eles são conhecidos por
          suas habilidades únicas, aparência imponente e são uma parte fundamental da experiência de jogo."
          rota="/chefes"
          ></CardIndex>
          <CardIndex
          categoria="Armaduras"
          link="https://www.gamepur.com/wp-content/uploads/2022/10/10154355/Elden-Ring-Carian-Knight-Armor.jpg"
          texto="As armaduras desempenham um papel crucial na proteção do seu personagem contra ataques de inimigos e chefes, tornando-o mais durável
          durante as batalhas."
          rota="/armor"
          ></CardIndex>
          <CardIndex
          categoria="Cinzas"
          link="https://gamingintel.com/wp-content/uploads/2022/04/Elden-Ring-Legendary-Spirit-Ashes-720x405.jpg"
          texto="Podem ser encontradas pelo mundo ou ao derrotar chefes, e então equipadas em uma arma ou escudo (dependendo do item) em um Local de Graça.
          Algumas armas já possuem Cinzas da Guerra que não podem ser removidas. Podem invocar espíritos em determinadas
          regiões."
          rota="/cinzas"
          ></CardIndex>
          <CardIndex
          categoria="Criaturas"
          link="https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d7b1b04f8b21d1c43edc6ec85e2f6443.jpg"
          texto="As criaturas em Elden Ring se referem aos inimigos, bestas e seres hostis que os jogadores encontrarão enquanto exploram o vasto mundo do jogo."
          rota="/criaturas"
          ></CardIndex>
          <CardIndex
          categoria="Classes"
          link="https://s2-techtudo.glbimg.com/znP0tpWRtXKpQVxIQmCWVsT4Qtc=/0x0:3840x2160/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/U/X/CA7n9ET4SZApunMY2d6w/elden-ring-classes-8kyb.jpg"
          texto="Em Elden Ring, as classes se referem às diferentes escolhas iniciais de personagens que os jogadores podem fazer no início do jogo.
          Cada classe oferece um conjunto inicial de estatísticas, habilidades e equipamentos que definem o estilo de jogo do personagem"
          rota="/eldenclasses"
          ></CardIndex>
          <CardIndex
          categoria="Espíritos"
          link="https://criticalhits.com.br/wp-content/uploads/2022/04/Elden-Ring-Mimic-Tear-Best-Spirit-Ashes-Powerful.jpg"
          texto="Ajudantes muito úteis enquanto exploramos o mapa ou lutamos contra grupos de inimigos. Afinal, eles são capazes de chamar a atenção dos 
          oponentes e permitir certos ataques com mais facilidade."
          rota="/espiritos"
          ></CardIndex>
          <CardIndex
          categoria="Localizações"
          link="https://assetsio.reedpopcdn.com/elden-ring-church-of-dragon-communion-map-location.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
          texto="Diferentes lugares e áreas dentro do vasto mundo do jogo que os jogadores podem explorar. O mundo de Elden Ring é um ambiente de mundo aberto
          expansivo e diversificado, repleto de regiões únicas, cidades, masmorras, florestas, desertos, fortalezas e muitos outros tipos de ambientes."
          rota="/locations"
          ></CardIndex>
          <CardIndex
          categoria="NPC´s"
          link="https://primagames.com/wp-content/uploads/2022/03/Knight-Bernahl-quest-Elden-Ring.jpg"
          texto="(Personagem Não-Jogável). Esses são personagens que não são controlados pelo
          jogador. Em vez disso, são controlados pela inteligência artificial do jogo e desempenham papéis variados na narrativa, na jogabilidade e
          na interação com o jogador."
          rota="/npc"
          ></CardIndex>
          <CardIndex
          categoria="Talismãs"
          link="https://cdn.gaminggorilla.com/wp-content/uploads/2023/05/The-Best-Elden-Ring-Talismans.jpg"
          texto="Itens que têm um propósito específico, frequentemente relacionado à magia e poderes místicos. Geralmente, os talismãs são usados para aprimorar
          ou lançar feitiços e habilidades mágicas."
          rota="/talisma"
          ></CardIndex>
          <CardIndex
          categoria="Itens"
          link="https://media.karousell.com/media/photos/products/2022/4/16/elden_ring__runes_and_items_ps_1650103850_a003bb18_progressive.jpg"
          texto="são itens necessários para zerar a campanha. Ao serem equipadas, elas ainda garantem bônus de atributos e outras vantagens.
          É possível obtê-las ao derrotar Semideuses — os chefes principais do jogo"
          rota="/ItemsER"
          ></CardIndex>
        </div>
      </div>
  )
}
