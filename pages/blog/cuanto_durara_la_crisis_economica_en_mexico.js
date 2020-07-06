import styled, { withTheme } from "styled-components";
import Head from "components/Head";
import SingleColumn from "components/shared/SingleColumn";
import Author from "components/Blog/Author";
import Title from "components/shared/Title";
import FormComplete from "components/FormComplete";
import MainGrid from "components/shared/MainGrid";
import Header from "components/Blog/Header";

function BlogPost(props) {
  return (
    <>
      <Head
        title={"¿Cuánto durará la crisis económica? Prospectiva México - DFI"}
        canonical={
          "https://deepfuture.institute/blog/cuanto_durara_la_crisis_economica_en_mexico"
        }
        description={
          "¿Cuándo terminará la crisis económica en México? La economía tiene vida propia y la recesión no necesariamente desaparecerá cuando el COVID-19 sea superado."
        }
        image={"og_blogsecond.png"}
        lang={props.lang}
      />
      <Header
        src="/assets/img/blog/posts/header_mexico.svg"
        alt="Cuánto durará la crisis económica?"
      />
      <SingleColumn>
        <h1>
          ¿Cuánto durará la <b>crisis económica</b> en México?
        </h1>
        <h2>Una visión prospectiva para tu estrategia y planeación</h2>
        <Author
          src="/assets/img/blog/authors/alberto.jpg"
          name="Alberto Carral"
          date="6 de Julio del 2020"
        />
        <p>
          Si algo buscan los líderes de empresas y de otras instituciones, es
          saber <b>cuándo terminará la crisis económica en México</b>. Si bien
          fue desencadenada por el COVID-19, la economía tiene vida propia y la
          recesión
          <b> no necesariamente desaparecerá cuando la pandemia sea superada</b>
          . Se discute si acaso el desempeño de la economía mexicana tendrá la
          trayectoria de una V, una U o una W, es decir, un “rebote” inmediato,
          una reacción más lenta o una recuperación con altibajos. También se
          plantea la posibilidad de que la recuperación tarde un tiempo
          considerable en llegar, por lo que la economía entraría en depresión y
          su comportamiento asumirá la forma de una L, dado que la actividad
          productiva quedaría estancada en un nivel por debajo del que mantenía
          antes de entrar en crisis
        </p>
        <p>
          <b>
            ¿Cuál es el escenario hipotético más probable de recuperación
            económica?
          </b>{" "}
          Te mostraremos cómo algunas tendencias clave están condicionando la
          dinámica económica y, por tanto, las posibilidades de recuperación de
          la actividad productiva de México. Nuestro propósito es que los
          líderes de las organizaciones cuenten con más elementos de juicio para
          aprovechar las oportunidades y adaptarse a los retos del futuro
          inmediato y mediato.
        </p>
        <h3>
          ¿Una recuperación económica de la crisis en México con forma de V?
          Improbable
        </h3>
        <p>
          Una recuperación de la economía con la forma de una V implica que, en
          el momento en que las personas salgan del confinamiento, las
          actividades productivas regresarán a su ritmo <i>normal</i>. Sin
          embargo, esto es muy improbable que suceda <b>¿Por qué?</b>
        </p>
        <ol>
          <li>
            <b>No todas las actividades arrancarán al mismo tiempo</b>; de
            hecho, en este mismo momento muchas siguen detenidas y algunas ya
            comenzaron a operar. Tal es el caso de la industria de la
            construcción y de las varias decenas de actividades ligadas a ella.
            Lo mismo sucede con las que están vinculados a las cadenas de
            suministro de Estados Unidos, nuestro principal socio comercial, en
            particular las actividades que integran las cadenas de valor de las
            industrias automotriz, aeronáutica y electrónica
          </li>
          <li>
            <b>
              Existen industrias que tardarán mucho más tiempo en recuperar su
              ritmo
            </b>
            . Independientemente de que la emergencia sanitaria haya sido
            superada en lo fundamental, como es el caso del transporte de
            personas (aéreo y terrestre), los restaurantes, hoteles y todas
            aquellas que conllevan concentraciones masivas de personas, como lo
            es la actividad de los centros comerciales, eventos deportivos,
            espectáculos, entre otros.
          </li>
          <li>
            <b>
              El paro de actividades está teniendo un impacto muy grande en la
              mayoría de las empresas{" "}
            </b>
            y no todas, por desgracia, podrán resistirlo. Algunas cerrarán
            definitivamente y otras se verán obligadas a reducir su ritmo de
            operación debido a la carencia de recursos financieros o porque
            parte significativa de sus ventas depende de otras actividades que
            siguen operando a un ritmo menor.
          </li>
          <li>
            Finalmente,
            <b> muchos trabajadores perderán sus fuentes de ingreso</b> y ese
            factor producirá una disminución del consumo de las familias y una
            baja concomitante en las ventas de muchas empresas pequeñas,
            medianas y grandes.
          </li>
        </ol>
        <h3>
          Recuperación en forma de U: la economía mexicana se mantendrá
          deprimida pero reaccionará paulatinamente
        </h3>
        <p>
          Parecería más probable una recuperación en forma de U, es decir, en la
          que la economía se mantendría deprimida durante un periodo de tiempo
          más o menos largo (de uno a tres años) y después reaccionaría
          paulatinamente hacia arriba, hasta encontrar un nivel de expansión
          parecido al de la etapa previa a la crisis sanitaria.
        </p>
        <img
          src="/assets/img/blog/posts/dobleola.svg"
          alt="Un análisis del pasado"
        />
        <h3>
          Una segunda ola de contagios puede frenar el desarrollo productivo una
          vez más
        </h3>
        <p>
          También puede ocurrir que una eventual recuperación en forma de U se
          detenga antes de lograr consolidarse, debido a la presencia de ciertas
          condiciones. Si, por ejemplo, se registra una segunda oleada de
          contagios por el coronavirus, esto podría forzar a la imposición de un
          nuevo período de confinamiento, con el consiguiente freno productivo
          que haría caer por segunda ocasión la economía, generando una
          trayectoria en forma de W. Algo similar podría suceder si la economía
          logra arrancar, pero, al poco tiempo, vuelve a perder impulso debido a
          la persistencia de la escasez de demanda.
        </p>
        <h3>
          Uno de los peores escenarios a los que podemos enfrentarnos: cuatro
          años o más de estancamiento económico
        </h3>
        <p>
          Otro escenario que parece tanto o más probable que el de la U, es uno
          en el que el crecimiento de la economía tiene un comportamiento de L
          por un lapso de tiempo mucho más largo, que podría llegar tener una
          duración de cuatro años o más. Esto es así, dado que{" "}
          <b>
            existen indicios de que la posición dominante de Estados Unidos en
            el mundo continuará deteriorándose a lo largo de la década que
            comienza.{" "}
          </b>
          <br />
          <br />
          Como se sabe, el país es por mucho el <b>
            principal socio de México
          </b>{" "}
          debido a que los aparatos productivos de ambas naciones están
          estrechamente vinculados y se integran en cadenas productivas
          transfronterizas. Para el vecino del Norte esta relación económica
          bilateral es muy relevante, pero{" "}
          <b>
            para México no sólo es importante, sino determinante y estratégica
          </b>
          , en virtud del grado en el que una enorme porción de su economía
          depende del desempeño de la economía más poderosa del mundo.
        </p>
        <h3>México es el principal socio comercial de EEUU</h3>
        <p>
          La entrada en vigor del T-MEC con EEUU y Canadá el próximo 20 de julio
          de 2020, será un factor dinamizador significativo para la economía
          mexicana, como también lo será la reconfiguración que las cadenas de
          suministro mundiales ya están experimentando en detrimento de China y
          en beneficio de países que, como México, poseen ventajas geoeconómicas
          únicas. Estas dos condiciones impulsarán la tendencia a la expansión
          del comercio bilateral entre ambas naciones, cuyo monto de 614 mil 500
          millones de dólares en 2019 convirtió a México en el principal socio
          comercial de EEUU. Sin embargo, están presentes otros factores que
          representan riesgos de gran calado para el mundo y, en particular,
          para la región de América del Norte.
        </p>
        <img
          src="/assets/img/blog/posts/2020.svg"
          alt="Un acercamiento estratégico al futuro"
        />
        <h3>
          2020-2030 una década marcada por la incertidumbre a escala global
        </h3>
        <p>
          Cada día se aprecian con mayor claridad señales ominosas en el
          escenario económico-financiero a escala global. Dichas señales podrían
          estar anunciando{" "}
          <b>
            algo más profundo y duradero que una tradicional crisis cíclica de
            la economía
          </b>
          , tal y como lo ha consignado la propia Kristalina Georgieva,
          Directora Gerente del Fondo Monetario Internacional, quien, antes de
          que la pandemia se convirtiera en la amenaza que es ahora, ya había
          anticipado que la década de 2020 estaría marcada por el
          recrudecimiento de la incertidumbre.
          <br />
          <br />
          <b>
            La crisis económica de oferta y demanda podría acelerar la
            transición hacia un nuevo sistema monetario internacional de
            carácter multipolar
          </b>
          , además de provocar un período de estancamiento económico de alcance
          mundial, semejante al que derivó del crack bursátil de 1929. Entre los
          factores que la incuban están:{" "}
        </p>
        <ol>
          <li>
            <b>El agotamiento del llamado sistema FIAT de divisas</b>, liderado
            por un dólar que se debilita en el escenario global debido a la
            pérdida de poderío y al imparable endeudamiento de la economía
            estadounidense. Desde hace medio siglo, específicamente a partir de
            que EEUU declaró la inconvertibilidad del dólar en oro en 1971, la
            economía capitalista mundial ha venido apoyando su expansión en el
            endeudamiento y en la emisión de dinero sin respaldo material alguno
          </li>
          <li>
            Como resultado de lo anterior, y sobre todo a raíz de la crisis de
            2008, la{" "}
            <b>
              deuda mundial —impulsada en gran medida por Estados Unidos y
              China— ha crecido tan desenfrenadamente que alcanza ya un monto
              superior a los 300 billones de dólares
            </b>
            , lo que representa más del triple del valor del PIB mundial total
            de 2019. El endeudamiento que más se ha agudizado es el de los
            gobiernos, debido a que las tasas de interés han disminuido hasta
            pasar a ser incluso negativas
          </li>
          <li>
            <b>
              Cada día son más los países que consideran que el sometimiento a
              la órbita del dólar representa una amenaza a su soberanía
            </b>{" "}
            y una traba para su adecuado desempeño en la economía global
          </li>
        </ol>
        <img
          src="/assets/img/blog/posts/declive_eeuu.svg"
          alt="Un análisis del pasado"
        />
        <h3>
          El debilitamiento de la hegemonía de EEUU se origina en su declive
          productivo
        </h3>
        <p>
          EEUU no sólo está perdiendo la batalla tecnológica con China, sino que
          además, la desigualdad social se ha profundizado trágicamente al
          interior de sus fronteras. A ello se suma el hecho dramático de que el{" "}
          <b>
            obligado confinamiento sanitario lanzó al paro a 36 millones de
            trabajadores y colapsó la producción y el comercio internacional de
            la gran potencia en una forma no vista desde hace por lo menos un
            siglo
          </b>
          . La economía de Estados Unidos se encuentra tan dislocada que, en los
          últimos 10 años, mientras la producción de ese país aumentó en 7
          billones de dólares, su deuda se incrementó en 11 billones de dólares
          adicionales, colocando la relación deuda total/PIB en un nivel
          histórico de 2 a 1, y eso antes de la crisis desencadenada por el
          coronavirus. Es necesario apuntar que el{" "}
          <b>
            decaimiento productivo no se limita a EEUU, sino que se extiende a
            las economías de varios países europeos, de América Latina y de Asia
          </b>
          —entre ellos Japón—. Pero tal vez{" "}
          <b>
            lo más preocupante es que también parece haber alcanzado a China
          </b>
          , la principal locomotora industrial de la economía mundial durante
          los últimos 20 años.
        </p>
        <h3>Entonces ¿Qué podemos esperar?</h3>
        <p>
          En suma, las tendencias de alto impacto en el corto plazo están
          interactuando con otras tendencias cuyo desarrollo es más lento,
          aunque igualmente amenazante para la economía de México. De este modo,
          los escenarios con mayor probabilidad de ocurrir son:{" "}
          <b>
            aquel caracterizado por un desempeño de la economía nacional en
            forma de una U
          </b>{" "}
          con una base muy ancha, y otro en el que las mega tendencias globales
          trastocan las reglas generales del funcionamiento de la economía, las
          finanzas y la política,{" "}
          <b>
            produciendo una ralentización de la economía mundial de la que
            México no logra escapar
          </b>
          .
        </p>
      </SingleColumn>
      <Title notoppadding>
        <p>
          La estrategia de hoy es mucho más que <b>sobrevivir</b>
        </p>
        <h3>
          Encuentra <b>certidumbre</b> con Deep Future Institute
        </h3>
      </Title>
      <LastForm>
        <FormComplete
          production={props.production}
          centered
          collectorId="BlogCollector"
        />
      </LastForm>
    </>
  );
}

export default withTheme(BlogPost);

const LastForm = styled(MainGrid)`
  padding-bottom: 6%;
  > div {
    background-color: ${(props) => props.theme.colors.home.accent};
  }
  @media (max-width: 950px) {
    padding-bottom: 0;
  }
`;
