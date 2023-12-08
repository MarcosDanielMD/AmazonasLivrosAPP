import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>
          Amazônia Livos
          <Image style={styles.img} source={require('../assets/5396637.png')} />
        </Text>
        <Text style={styles.texto}>
          Bem-vindo ao Amazônia Livros, o seu aplicativo de cadastro de livros
          intuitivo e eficiente! Aqui, você pode organizar sua biblioteca
          pessoal de maneira simples e prática. Registre todos os seus livros
          favoritos, mantenha o controle das suas leituras e descubra novas
          obras para enriquecer sua coleção.
        </Text>
        <Text style={styles.titulo}>Recursos destacados:</Text>
        <Text style={styles.box}>
          <Text style={styles.topico}>Cadastro Rápido:</Text> Adicione livros à
          sua estante de forma fácil e rápida. Basta escanear o código de barras
          ou inserir manualmente as informações do livro para começar.{' '}
        </Text>

        <Text style={styles.box}>
          {' '}
          <Text style={styles.topico}>Organização Personalizada:</Text> Crie
          categorias, como "Lidos", "Quero Ler" e "Favoritos", para manter seus
          livros organizados de acordo com suas preferências.
        </Text>
        <Text style={styles.box}>
          <Text style={styles.topico}> Avaliações e Resenhas: </Text>Compartilhe
          suas opiniões sobre os livros que leu. Atribua avaliações e escreva
          resenhas para ajudar outros usuários a descobrir novas leituras. Busca
          Avançada: Encontre facilmente qualquer livro em sua estante com nossa
          busca avançada. Pesquise por título, autor ou gênero para localizar
          rapidamente o que procura.
        </Text>

        <Text style={styles.box}>
          {' '}
          <Text style={styles.topico}> Sugestões Personalizadas:</Text> Deixe
          que o Amazônia Livros sugira novos títulos com base em suas
          preferências de leitura. Descubra obras semelhantes às que você já
          ama.{' '}
        </Text>
        <Text style={styles.box}>
          {' '}
          <Text style={styles.topico}>Backup na Nuvem:</Text> Mantenha seus
          dados seguros e sincronizados em todos os dispositivos. Nunca perca o
          controle da sua biblioteca, mesmo ao trocar de celular ou tablet.{' '}
        </Text>
        <TouchableOpacity>
        <Text style={styles.btn}> Acesse agora! </Text></TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#FFF5EE',
  },
  titulo: {
    paddingTop: 20,
    color: '#363636',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  img: {
    marginLeft: 20,
    width: 50,
    height: 50,
  },
  texto: {
    fontSize: 18,
    margin: 20,
    textAlign: 'center',
  },
  box: {
    fontSize: 15,
    margin: 10,
    color: '#1C1C1C',
    backgroundColor: '#FFDEAD',
    padding: 10,
    borderRadius: 20,
  },
  topico: {
    fontWeight: 'bold',
  },
  btn:{
    fontSize:25,
    textAlign:'center',
    backgroundColor: '#DAA520',
    borderRadius: 20,
    padding:10,
    fontWeight:'bold',
    margin:20
  }
});
