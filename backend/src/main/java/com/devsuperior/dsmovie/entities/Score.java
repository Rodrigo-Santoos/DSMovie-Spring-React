package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {

	// chave id composta no java
	
	@EmbeddedId
	private ScorePK id = new ScorePK();
	private Double value;

// constructor
	public Score() {

	}

//getters e setters
	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
	
//metodos
	
	//associar o score no score do Movie
	public void setMovie(Movie movie) {
		id.setMovie(movie);
	}
	
	//salavando a referencia do usuario
	public void setUser(User user) {
		id.setUser(user);
	}
}
