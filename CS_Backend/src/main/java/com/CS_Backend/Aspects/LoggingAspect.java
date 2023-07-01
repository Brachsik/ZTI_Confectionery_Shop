package com.CS_Backend.Aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Aspect
@Component
public class LoggingAspect {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Before("execution(* com.CS_Backend.Services.ProductService.*(..)) || execution(* com.CS_Backend.Services.UserService.*(..))")
    public void logBefore(JoinPoint joinPoint) {
        logger.info("Before executing method: {}", joinPoint.getSignature().getName());
    }

    @After("execution(* com.CS_Backend.Services.ProductService.*(..)) || execution(* com.CS_Backend.Services.UserService.*(..))")
    public void logAfter(JoinPoint joinPoint) {
        logger.info("After executing method: {}", joinPoint.getSignature().getName());
    }

}
