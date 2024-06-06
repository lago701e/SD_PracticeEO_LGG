package es.dws.PracticaSD.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private String nombre;
 private int edad;
 private String membresia;

 public User() {
  // Constructor sin argumentos
 }

 // Getters y setters
 public Long getId() {
  return id;
 }

 public void setId(Long id) {
  this.id = id;
 }

 public String getNombre() {
  return nombre;
 }

 public void setNombre(String nombre) {
  this.nombre = nombre;
 }

 public int getEdad() {
  return edad;
 }

 public void setEdad(int edad) {
  this.edad = edad;
 }

 public String getMembresia() {
  return membresia;
 }

 public void setMembresia(String membresia) {
  this.membresia = membresia;
 }
}
