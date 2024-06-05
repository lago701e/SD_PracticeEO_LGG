package es.dws.PracticaSD.service;

import es.dws.PracticaSD.model.Comentario;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
@Service
public class ComentarioService {
    private Map<Long, Comentario> comentarios = new HashMap<>();
    private long currentId = 1;

    public Comentario createComentario(Comentario comentario) {
        comentario.setId(currentId++);
        comentarios.put(comentario.getId(), comentario);
        return comentario;
    }

    public Comentario getComentario(Long id) {
        return comentarios.get(id);
    }

    public Comentario updateComentario(Long id, Comentario comentario) {
        comentarios.put(id, comentario);
        return comentario;
    }

    public void deleteComentario(Long id) {
        comentarios.remove(id);
    }
}
