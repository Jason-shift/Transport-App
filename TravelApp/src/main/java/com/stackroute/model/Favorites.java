package com.stackroute.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "favorites")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Favorites {


	@EmbeddedId
	private FavoritesComposite favoritesComposite;
	
}
