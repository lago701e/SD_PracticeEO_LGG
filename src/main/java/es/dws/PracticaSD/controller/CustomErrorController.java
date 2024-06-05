package es.dws.PracticaSD.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;

@ControllerAdvice
public class CustomErrorController {

    @ExceptionHandler(Throwable.class)
    @GetMapping ("/error")
    public String handleError(Throwable ex, Model model) {
        // Lógica para manejar el error
        model.addAttribute("errorMessage", ex.getMessage());
        return "error.html";
    }
}



