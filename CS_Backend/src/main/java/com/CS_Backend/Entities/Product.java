package com.CS_Backend.Entities;

import javax.persistence.*;

@Entity
@Table(
        name="product",
        uniqueConstraints = {
                @UniqueConstraint(name = "product_name_unique", columnNames = "name")
        }
)
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(
            name="name",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String name;
    @Column(
            name="price",
            nullable = false
    )
    private Double price;
    @Column(
            name="weight",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String weight;
    @Column(
            name="quantity",
            nullable = false
    )
    private Integer quantity;

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public Product(String name, Double price, String weight, Integer quantity) {
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.quantity = quantity;
    }

    public Product() {

    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", weight='" + weight + '\'' +
                '}';
    }
    
    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Double getPrice() {
        return price;
    }

    public String getWeight() {
        return weight;
    }
}
