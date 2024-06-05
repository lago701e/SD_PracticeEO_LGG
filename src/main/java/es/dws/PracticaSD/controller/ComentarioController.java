package es.dws.PracticaSD.controller;

import es.dws.PracticaSD.model.Comentario;
import es.dws.PracticaSD.service.ComentarioService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Map;

@RestController
@RequestMapping("/comentarios")
public class ComentarioController {

    private final ComentarioService comentarioService;

    public ComentarioController(ComentarioService comentarioService) {
        this.comentarioService = comentarioService;
    }

    @PostMapping
    public Comentario createComentario(@RequestBody Comentario comentario) {
        return comentarioService.createComentario(comentario);
    }

    @GetMapping("/{id}")
    public Comentario getComentario(@PathVariable Long id) {
        return comentarioService.getComentario(id);
    }

    @PutMapping("/{id}")
    public Comentario updateComentario(@PathVariable Long id, @RequestBody Comentario comentario) {
        return comentarioService.updateComentario(id, comentario);
    }

    @PatchMapping("/{id}")
    public Comentario patchComentario(@PathVariable Long id, @RequestBody Map<String, Object> updates) {
        Comentario comentario = comentarioService.getComentario(id);
        updates.forEach((k, v) -> {
            switch (k) {
                case "contenido":
                    comentario.setContenido((String) v);
                    break;
                case "fecha":
                    comentario.setFecha((Date) v);
                    break;
            }
        });
        return comentarioService.updateComentario(id, comentario);
    }

    @DeleteMapping("/{id}")
    public void deleteComentario(@PathVariable Long id) {
        comentarioService.deleteComentario(id);
    }
}
