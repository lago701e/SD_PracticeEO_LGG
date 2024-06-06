package es.dws.PracticaSD.service;

import es.dws.PracticaSD.model.User;
import es.dws.PracticaSD.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsuarios() {
        return userRepository.findAll();
    }

    public User createUsuario(User user) {
        return userRepository.save(user);
    }

    public User updateUsuario(Long id, User userDetails) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            user.setNombre(userDetails.getNombre());
            user.setEdad(userDetails.getEdad());
            user.setPassword(userDetails.getPassword());
            return userRepository.save(user);
        }
        return null;
    }

    public void deleteUsuario(Long id) {
        userRepository.deleteById(id);
    }

    public User getUsuarioById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}

