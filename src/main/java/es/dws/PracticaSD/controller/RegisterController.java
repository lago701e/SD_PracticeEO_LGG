package es.dws.PracticaSD.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RegisterController {
    @GetMapping("/registration")
    public String registro(Model model) {
        System.out.println("Accediste a la página de registro");
        return "register.html";
    }
}

