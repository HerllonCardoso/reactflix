/* eslint-disable linebreak-style */
import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAllWithVideos() {
  fetch(URL_CATEGORIES)
    .then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();

      return resposta;
    });
}

export default {
  getAllWithVideos,
};
