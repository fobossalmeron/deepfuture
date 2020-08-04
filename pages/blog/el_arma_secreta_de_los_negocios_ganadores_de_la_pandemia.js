import { withTheme } from "styled-components";
import Head from "components/Head";
import SingleColumn from "components/shared/SingleColumn";
import Author from "components/Blog/Author";
import Header from "components/Blog/Header";
import BlogFooter from "components/Blog/Footer";

const SHARE_URL =
  "https://deepfuture.institute/blog/el_arma_secreta_de_los_negocios_ganadores_de_la_pandemia";

function BlogPost(props) {
  return (
    <>
      <Head
        title={
          "Método de escenarios: el arma secreta de los negocios ganadores de la pandemia"
        }
        canonical={SHARE_URL}
        description={
          "Conoce el proceso de investigación para construir los escenarios de riesgo que debes considerar tu negocio en el futuro."
        }
        image={"og_blogthird.png"}
        lang={props.lang}
      />
      <Header
        src="/assets/img/blog/posts/header_arma.svg"
        alt="El arma secreta"
      />
      <SingleColumn>
        <h1>
          <b>Método de escenarios:</b> el arma secreta de los negocios ganadores
          de la pandemia
        </h1>
        <h2>
          Una herramienta prospectiva para afrontar escenarios de alta
          incertidumbre como el que vivimos con el COVID-19
        </h2>
        <Author
          src="/assets/img/blog/authors/alfonso.jpg"
          name="Alfonso Arroyo"
          date="04 de Agosto del 2020"
        />
        <p>
          <b>
            Una de las grandes enseñanzas de la pandemia debería ser cómo
            prepararnos ante eventos de alta incertidumbre
          </b>
          . Se piensa que la clave tiene que ver con colectar datos, datos y más
          datos, sin entender que
          <b>
            {" "}
            ningún método estadístico pudo o hubiera podido predecir lo que
            vivimos
          </b>{" "}
          al presente. Y la razón es simple. Los métodos estadísticos, el
          corazón del <i>machine learning</i> y la Inteligencia Artificial (AI),
          necesitan datos para proyectar tendencias del pasado al presente.{" "}
          <b>Lo que vivimos es inédito y por tanto no hay datos</b>. Pero si
          bien no había datos, lo que había y mucho, eran escenarios.
        </p>
        <p>
          <b>
            ¿Qué es el método de escenarios y por qué es el arma secreta de los
            y las ganadoras de la pandemia?
          </b>{" "}
          Al presente hay distintos métodos de escenarios, pero básicamente se
          trata de una metodología que{" "}
          <b>
            nos permite evaluar y aprovechar los potenciales del presente, sobre
            la base de eventos que podrían ocurrir en el futuro.
          </b>{" "}
          Para analizar esos potenciales{" "}
          <b>se convoca a un grupo de expertos</b> y mediante ciertos
          procedimientos <b>se les pide explorar</b> esos potenciales{" "}
          <b>y proponer líneas de acción</b>. Los escenarios son fundamentales
          en momentos de crisis como la que vivimos, cuando las personas y las
          organizaciones se enfrentan a eventos para los que no existen datos o
          precedentes claros que guíen la acción.
        </p>
        <img
          src="/assets/img/blog/posts/metodo_escenarios.svg"
          alt="Método escenarios"
        />
        <p>
          <b>
            Un caso de éxito claro de los escenarios en tiempos de COVID-19 es
            Bill Gates.
          </b>{" "}
          A través de la fundación Bill y Melinda Gates,{" "}
          <b>ha financiado proyectos prospectivos</b> (que usan el método de
          escenarios) desde hace tiempo. En octubre del año pasado, la fundación
          organizó un ejercicio prospectivo en el que se evaluaron distintos{" "}
          <a
            href="https://www.centerforhealthsecurity.org/event201/"
            target="_blank"
            rel="noopener noreferrer"
          >
            escenarios en torno a una pandemia mundial
          </a>
          . El aprendizaje obtenido de éste y otros ejercicios previos, colocan
          a Bill Gates al presente, como{" "}
          <b>
            uno de los pocos individuos que tenía un plan previsto para lo que
            estamos viviendo
          </b>
          . Esto lo pone en posición inmejorable para cumplir su sueño de
          dirigir muchas de las políticas públicas de EU (y quizá del mundo).
        </p>
        <h3>La planeación como un proceso de aprendizaje continuo</h3>
        <img
          src="/assets/img/blog/posts/bola_cristal.svg"
          alt="Bola de cristal"
        />
        <p>
          Es importante destacar que{" "}
          <b>los escenarios no sirven para adivinar el futuro</b>. El futuro no
          es algo que está ahí esperándonos.{" "}
          <b>El futuro se construye todos los días</b>. Es por ello que la
          riqueza de los escenarios radica en la manera en que permiten
          construir una <b>cultura de planeación continua</b>, en la que los
          participantes, idealmente todos los miembros de una empresa, se
          cuestionan sobre:
        </p>
        <ul>
          <li>Metas</li>
          <li>Objetivos</li>
          <li>Problemas</li>
          <li>Soluciones</li>
        </ul>
        <p>
          Es en este sentido que llegan a{" "}
          <b>preguntarse cotidiana y estratégicamente</b> qué pasaría si se
          tuviera que cerrar la tienda insignia, o si se tuviera que enviar a
          todo el personal a hacer home office de un día para otro. Es muy
          difícil que de buenas a primeras se te ocurra organizar un ejercicio
          que te prepare para lo que estamos viviendo. Pero si{" "}
          <b>ya existe en la empresa una cultura de planeación</b> en la forma
          de aprendizaje continuo, que por lo mismo permite{" "}
          <b>que la gente piense e imagine sobre escenarios buenos y malos</b>,
          ya no suena improbable que en una de esas alguien se preguntara qué
          pasaría si todos y todas hiciéramos home office, qué pasaría si la
          demanda se redujera drásticamente o qué pasaría si se cortaran
          nuestras redes de suministros. Observar que{" "}
          <b>no se trata de adivinar que habría una pandemia</b> o cuándo se
          aplicará masivamente la vacuna. Tiene que ver con preguntarte y
          prepararte para eventos disruptivos por si llegase a pasar algo,
          cualquier cosa, en la que ese conocimiento reduciría la incertidumbre
          sobre qué hacer o cómo actuar.{" "}
          <b>
            Los escenarios sirven para trazar líneas de acción que te permitan
            reaccionar eficazmente en momentos de alta incertidumbre.
          </b>
        </p>
        <h3>
          ¿Cómo se benefician del método de escenarios los negocios más
          innovadores del mundo?
        </h3>
        <img src="/assets/img/blog/posts/freitag.svg" alt="Freitag" />
        <p>
          El tesoro de los escenarios yace en{" "}
          <b>
            la opinión sistematizada, cuantificada y evaluada de los expertos
          </b>
          . De esta manera, la opinión se transforma en información, y{" "}
          <b>
            la información se traduce en <i>insights</i>
          </b>{" "}
          que inspirarán las líneas de acción que guiarán lo que hagamos en{" "}
          <b>tiempos de incertidumbre</b>. Por ejemplo,{" "}
          <a
            href="https://www.freitag.ch/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freitag lab{" "}
          </a>{" "}
          es una empresa que recicla llantas de tractores para hacer prendas de
          vestir y accesorios. Freitag{" "}
          <b>utiliza constantemente el método de escenarios</b>. En uno de sus
          ejercicios{" "}
          <b>
            se preguntaron: ¿Qué pasaría si tuviéramos que cerrar nuestra tienda
            insignia en Nueva York?
          </b>{" "}
          Cuando colapsó la ciudad debido a la pandemia, Freitag{" "}
          <b>ya tenía trazado un plan de acción y pudo responder rápidamente</b>
          , lo que les dio una ventaja enorme sobre sus competidores.
        </p>
        <p>
          La anécdota de Freitag muestra dos características clave de{" "}
          <b>los escenarios</b>. La primera es que{" "}
          <b>te permiten ser proactivo y no reactivo</b>. La mayoría de{" "}
          <b>las empresas y los individuos han sido reactivos a la pandemia</b>.
          Para utilizar un término popular, la mayoría de la gente se ha
          adaptado. Algunas personas y organizaciones lo han hecho bien, muchas
          y muchos lo han hecho mal. Creemos que no es exageración decir que
          todos <b>los y las ganadoras del COVID fueron proactivos</b>. No que
          supieran lo que venía, pero sí que{" "}
          <b>tenían planes de contingencia</b> ante eventos inesperados que los
          prepararon para lo que vino. Freitag no se hizo la pregunta mientras
          se preparaba para una epidemia mundial, lo hizo para{" "}
          <b>
            construir planes que le permitieran afrontar mejor situaciones
            disruptivas
          </b>
          . De la misma manera, la Fundación de Bill y Melinda Gates no organizó
          un taller para evaluar qué pasaría si se desatara una epidemia global
          porque pensaran liberar un virus letal, sino para{" "}
          <b>tener listos planes de acción</b> por si se llegase a dar un evento
          tal o similar.
        </p>
        <h3>
          En épocas de incertidumbre el método de escenarios es una herramienta
          de gestión fundamental
        </h3>
        <p>
          <b>
            El método de escenarios es conocido, pero poco utilizado en México
          </b>
          , para la planeación estratégica. Como resultado tenemos a{" "}
          <b>decenas de miles de negocios</b> y organizaciones con estrategias
          ceñidas a conceptos, desarrollados en tiempos de estabilidad, que
          minimizan los eventos inesperados; o bien,{" "}
          <b>
            con una visión a muy corto plazo que no considera ni discute eventos
            improbables
          </b>
          .
          <br />
          <br />
          Estas y otras razones pierden de vista el{" "}
          <b>valor inmenso que tiene explorar el potencial de futuros</b> para
          un negocio. No se dan cuenta que la idea no es adivinar el futuro
          sino:
        </p>
        <ol>
          <li>
            <b>Trazar líneas de acción disruptivas</b> que te permitan
            aprovechar oportunidades
          </li>
          <li>
            <b>Evitar riesgos</b> que no están a la vista.{" "}
          </li>
          <li>
            <b>Crear una cultura de planeación/aprendizaje</b> que mejore todo
            el proceso de construcción de estrategias y toma de decisiones
          </li>
          <li>
            <b>Aprender a leer las tendencias</b> del presente para anticipar
            eventos
          </li>
          <li>
            <b>Imaginar el futuro</b> y desarrollar las estrategias para
            construirlo
          </li>
        </ol>
        <p>
          Nadie tenía en la mira una situación como la que vivimos, pero había
          planes.{" "}
          <b>
            Nadie sabe qué nos espera en la nueva normalidad, pero ya hay
            estrategias
          </b>
          . Recordarlo una vez más: <b>es mejor ser proactivos que reactivos</b>
          . En épocas de gran incertidumbre los escenarios son la herramienta de
          gestión fundamental para no desaprovechar una crisis (como diría
          Warren Buffet) o por lo menos, para no desaparecer.
        </p>
      </SingleColumn>
      <BlogFooter url={SHARE_URL} production={props.production} />
    </>
  );
}

export default withTheme(BlogPost);
