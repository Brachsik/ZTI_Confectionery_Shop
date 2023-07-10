package com.CS_Backend.Controllers;

import com.CS_Backend.Entities.Product;
import com.CS_Backend.Services.ProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(MockitoExtension.class)
@WebMvcTest(ProductController.class)
public class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private ProductService productService;

    @Test
    void testGetProducts() throws Exception {
        Product product1 = new Product("Sernik", 12.0, "1kg", 30);
        Product product2 = new Product("Szarlotka", 10.0, "1kg", 20);
        List<Product> products = Arrays.asList(product1, product2);

        when(productService.getProducts()).thenReturn(products);

        mockMvc.perform(get("/products"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$", hasSize(2)));

        verify(productService, times(1)).getProducts();
    }

    @Test
    void testAddProduct() throws Exception {
        Product product = new Product("Apple", 1.0, "1kg", 100);

        mockMvc.perform(post("/products")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(product)))
                .andExpect(status().isOk());

        verify(productService, times(1)).addProduct(any(Product.class));
    }

    @Test
    void testDeleteProduct() throws Exception {
        Long productId = 1L;

        mockMvc.perform(delete("/products/" + productId))
                .andExpect(status().isOk());

        verify(productService, times(1)).deleteProduct(productId);
    }

    @Test
    void testUpdateProduct() throws Exception {
        Long productId = 1L;
        Product updatedProduct = new Product("Apple", 1.0, "1kg", 150);

        mockMvc.perform(put("/products/" + productId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updatedProduct)))
                .andExpect(status().isOk());

        verify(productService, times(1)).editProduct(anyLong(), anyInt());
    }
}
