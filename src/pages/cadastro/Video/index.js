import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';



function CadastroVideo() {

  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=5vtw8vdc9wM',
    categoria: 'Front End'

    
  });

    return(
      <PageDefault>
         <h1>
            Cadastro de Vídeo
         </h1>

         <form onSubmit={(event) => {
           event.preventDefault();

           videosRepository.create({
             titulo: '',
             url: values.url,
             categoriasId: 1,
           })
            .then(() => {
              console.log('Cadastrou com sucesso!');
              history.push('/');
            });
    
         }}
         >
            <FormField
            label="Titulo da Categoria"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
            />

            <FormField
            label="URL"
            name="url"
            value={values.url}
            onChange={handleChange}
            />

            <FormField
            label="Categoria"
            name="categoria"
            value={values.categoria }
            onChange={handleChange}
            />

            <Button type="submit">
          Cadastrar
        </Button>
         </form>

        <Link to="/cadastro/categoria">
            Cadastrar categoria
        </Link>
      </PageDefault>
    )
  }


export default CadastroVideo;