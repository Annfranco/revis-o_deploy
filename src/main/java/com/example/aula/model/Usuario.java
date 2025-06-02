package com.example.aula.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "tab_usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome é obrigatório.")
    private String nome;

    @Enumerated(EnumType.STRING)
    private Sexo sexo;

    @Min(16)
    private int idade;

    @NotBlank(message = "Altura é obrigatório.")
    private String altura;

    @NotBlank(message = "Peso é obrigatório.")
    private String peso;

    @NotBlank(message = "Posição é obrigatório.")
    private String posicao;

    private int numeroCamisa;

    public Usuario() {
    }

    public Usuario(Long id, String nome, Sexo sexo, int idade, String altura, String peso, String posicao, int numeroCamisa) {
        this.id = id;
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.posicao = posicao;
        this.numeroCamisa = numeroCamisa;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotBlank(message = "Nome é obrigatório.") String getNome() {
        return nome;
    }

    public void setNome(@NotBlank(message = "Nome é obrigatório.") String nome) {
        this.nome = nome;
    }

    public Sexo getSexo() {
        return sexo;
    }

    public void setSexo(Sexo sexo) {
        this.sexo = sexo;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public @NotBlank(message = "Altura é obrigatório.") String getAltura() {
        return altura;
    }

    public void setAltura(@NotBlank(message = "Altura é obrigatório.") String altura) {
        this.altura = altura;
    }

    public @NotBlank(message = "Peso é obrigatório.") String getPeso() {
        return peso;
    }

    public void setPeso(@NotBlank(message = "Peso é obrigatório.") String peso) {
        this.peso = peso;
    }

    public @NotBlank(message = "Posição é obrigatório.") String getPosicao() {
        return posicao;
    }

    public void setPosicao(@NotBlank(message = "Posição é obrigatório.") String posicao) {
        this.posicao = posicao;
    }

    public int getNumeroCamisa() {
        return numeroCamisa;
    }

    public void setNumeroCamisa(int numeroCamisa) {
        this.numeroCamisa = numeroCamisa;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", sexo='" + sexo + '\'' +
                ", idade=" + idade +
                ", altura=" + altura +
                ", peso=" + peso +
                ", posicao=" + posicao +
                ", numeroCamisa=" + numeroCamisa +
                '}';
    }
}

