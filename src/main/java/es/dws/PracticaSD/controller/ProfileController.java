package es.dws.PracticaSD.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class ProfileController {
    @GetMapping("/profile")
    public String personal_data(Model model) {
        return "profile.html";
    }
}
