package es.dws.PracticaSD.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class CompraController {
    @GetMapping("/shop")
    public String personal_data(Model model) {
        return "index3";
    }
}

