import {
  WrapperContent,
  Article,
  Header2,
  Paragraph,
  Image,
  Figcaption,
} from "./styled";

const Content = () => (
  <WrapperContent>
    <Article>
      <Header2>O mnie</Header2>
      <Paragraph>
        Za dużo nie ma co pisać o sobie. Jestem jednym z wielu, których mijasz
        codziennie kiedy jedziesz do szkoły, pracy czy sklepu. Jakoś niczym
        specjalnym się nie wyróżniam. Może inaczej to wyglądało jeszcze około{" "}
        <strong>5 lat temu</strong>, kiedy ostro trenowałem kolarstwo szosowe.
        Wówczas można było mnie spotkać co dziennie na rowerze szosowym,
        potocznie zwanym kolarzówką, w odpowiednim stroju oraz kasku na głowie.
        Jak wspomina mój kolega, były to dzikie czasy.
      </Paragraph>
      <Paragraph>
        <strong>Obecnie</strong> na rower wsiadam dwalub trzy razy w tygodniu.
        Wszystko ze względu na zmiany w życiu. Od 4 lat jestem w związku
        małżeńskim oraz ojcem 4 letniej córki. Dodatkowo wykończenie domu po
        jego kupnie, również pochłaniało sporo czasu. Dlatego rower przez trzy i
        pół roku stał i zbierał kurz. Mimo wszystko za nic bym nie zmienił
        swojego życia.
      </Paragraph>
    </Article>
    <Article>
      <Header2>Kolarstwo - część mojego życia</Header2>
      <Paragraph>
        Czym jest kolarstwo? Dla osoby lubiący ten sport,{" "}
        <strong>to coś więcej</strong> niż kolarz lub kolarka (tak to się
        odmienia) w obcisłym stroju w kasku na głowie i kręcący lub kręcąca w
        pewnym rytmie nogami. Sport ten uczy przede wszystkim: samozaparcia,
        dyscypliny oraz konsekwencji w dążeniu do celu. Jest coś jeszcze czego
        na pierwszy rzut oka nie widać. To zaufanie do drugiej osoby. Pewnie
        myślisz sobie teraz w jaki sposób?{" "}
        <strong>Kolarstwo szosowe od zawsze jest sportem drużynowym.</strong>{" "}
        Oczywiście zwycięzca jest tylko jeden, jednak bez pomocy całej drużyny,
        lider zespołu nic by nie osiągnął.{" "}
      </Paragraph>
      <Paragraph>
        Prace zespołową może mniej widać w peletonie, gdzie każdy z zawodników
        ma przydzielone swoje zadanie. Natomiast pracę zespołową najlepiej widać
        w trakcie jazdy drużynowej na czas. Tutaj bardzo ważne jest zaufanie do
        osoby, która aktualnie jedzie jako pierwsza. Osoby jadące za nią,
        kompletnie nie widzą co się dzieje na drodze.{" "}
      </Paragraph>
      <figure>
        <Image
          src="https://i.ibb.co/sWch7Qb/10532125-353776408106565-9104375348403991049-o.jpg"
          alt="Zawodnicy w trakcie jazdy drużynowej na czas"
        />
        <Figcaption>
          Ja wraz z kolegami, w trakcie zawodów jazdy drużynowej na czas na
          dystansie 100 km. Na zdjęciu jestem na pierwszej zmianie.
        </Figcaption>
      </figure>
    </Article>
  </WrapperContent>
);

export default Content;
