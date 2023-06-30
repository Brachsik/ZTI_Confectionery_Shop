package com.CS_Backend.Services;

import com.CS_Backend.Entities.Product;
import com.CS_Backend.Layers.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductsRepository productsRepository;

    @Autowired
    public ProductService(ProductsRepository productsRepository) {
        this.productsRepository = productsRepository;
    }

    public List<Product> getProducts() {
        return productsRepository.findAll();
    }

    public void addProduct(Product product) {
        Optional<Product> productsByName = productsRepository.findProductsByName(product.getName());
        if(productsByName.isPresent()) {
            throw new IllegalStateException("Product already exists");
        }
        productsRepository.save(product);
    }

    public void deleteProduct(Long id) {
        boolean exists = productsRepository.existsById(id);
        if(!exists) {
            throw new IllegalStateException("product does not exists");
        }
        productsRepository.deleteById(id);
    }
}
