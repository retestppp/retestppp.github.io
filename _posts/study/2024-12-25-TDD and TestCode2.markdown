---
layout: post
title:  "[TDD 2] - TDD 개념과 설정2"
description: "TDD 개념과 설정에 대해 알아보자."
date:   2024-12-21 20:50:00 +0900
categories: study
tags: [Back end]
img-tag: study
---

# TDD(Test-driven devlopment) - 테스트 주도 개발 - 2
- 이전 포스팅에서 이어집니다. 

## 관련 지식 모음
### 테스트 클래스에서는 일반적으로 다음과 같은 어노테이션을 사용하지 않는다.
1. `@RestController`, `@Controller`, `@Service`, `@Repository`: 이들은 스프링 빈을 정의하는 어노테이션이다. 
    - 테스트 클래스는 스프링 빈이 아니며, 이들 어노테이션은 테스트 클래스의 목적과 맞지 않는다.
    - 테스트 클래스는 테스트 케이스를 정의하고 실행하는 것이 목적이며, 이를 위해 JUnit과 같은 테스트 프레임워크에서 제공하는 어노테이션을 사용한다.

2. `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`: 이들은 HTTP 요청을 처리하는 메소드를 정의하는 어노테이션이다. 
    - 테스트 메소드는 HTTP 요청을 처리하는 것이 아니라 테스트 케이스를 실행하는 것이 목적이므로, 이들 어노테이션은 테스트 메소드에 적합하지 않다.

### 테스트 클래스에서는 주로 다음과 같은 어노테이션을 사용한다. 
1. `@Test`: 테스트 메소드를 정의하는 어노테이션이다.
2. `@BeforeEach`, `@AfterEach`: 각 테스트 메소드 실행 전후에 실행할 메소드를 정의하는 어노테이션이다.
3. `@BeforeAll`, `@AfterAll`: 모든 테스트 메소드 실행 전후에 한 번씩 실행할 메소드를 정의하는 어노테이션이다.
4. `@ExtendWith`: JUnit 5에서 테스트 확장을 사용하는 어노테이션이다. 예를 들어, Mockito를 사용하려면 `@ExtendWith(MockitoExtension.class)`를 사용한다.
5. `@Mock`, `@Spy`, `@Captor`, `@InjectMocks`: Mockito에서 제공하는 어노테이션으로, 모의 객체를 생성하고 주입하는 데 사용한다.
6. `@SpringBootTest`: 스프링 부트 테스트를 위한 어노테이션으로, 스프링 애플리케이션 컨텍스트를 로드한다.

### Test코드 메소드가 Void로 선언되는 이유  
1. JUnit 테스트 메소드는 테스트의 성공 또는 실패를 결정하기 위해 예외를 던지거나 던지지 않는 방식을 사용한다. 
2. 테스트가 성공적으로 완료되면 메소드는 정상적으로 종료되고, 실패하면 예외가 발생한다. 
3. 따라서 테스트 메소드에 반환 값이 필요하지 않으며, 일반적으로 void 타입으로 선언된다.  
4. 반환 값을 가진 테스트 메소드를 작성하면, 그 반환 값이 테스트 결과에 어떠한 영향도 미치지 않는다. 즉, 테스트 메소드가 값을 반환하더라도 JUnit은 그 값을 무시하고, 메소드가 예외 없이 종료되면 테스트를 성공한 것으로 간주한다. 
5. 따라서 테스트 메소드는 void 타입이어야 하며, 테스트의 성공 또는 실패는 assert 메소드를 사용하여 검증해야 한다.

### Mockito의 어노테이션 
1. 스프링과 Junit을 이용해서 테스트 코드를 작성하다 보면 테스트 환경(database, api)을 구현하는 코드까지 작성해야 하고 실제 테스트할 코드보다 환경을 구현하는 코드가 훨씬 더 복잡해지게 된다. 
2. 이런 문제 영역을 해결하기 위해서 테스트 더블 이라는 것이 나왔고 Java진영에서는 대표적으로 Mockito가 있다.
3. @Autowired와 @InjectMocks는 모두 의존성 주입을 위한 어노테이션이다. 하지만 사용되는 컨텍스트와 방식에 차이가 있다.  

#### @Autowired
1.  @Autowired는 Spring Framework에서 제공하는 어노테이션이다.
2. 이 어노테이션은 Spring의 IoC 컨테이너에서 관리하는 빈(bean)을 주입하는 데 사용된다.
3. @Autowired는 필드, 생성자, setter 메서드 등에 사용할 수 있다.
4. Spring 4.3 이후부터는 생성자에 @Autowired를 생략할 수 있다. 
5. 단일 생성자가 있는 경우 Spring이 자동으로 그 생성자를 사용하여 의존성을 주입한다.

#### @InjectMocks 
1. @InjectMocks는 Mockito 테스트 프레임워크에서 제공하는 어노테이션이다.
2. 이 어노테이션은 테스트 대상 객체에 Mock 객체를 주입하는 데 사용된다.
3. @InjectMocks는 테스트 대상 객체를 생성하고, @Mock 또는 @Spy 어노테이션이 붙은 Mock 객체를 해당 객체에 주입한다.
4. @InjectMocks는 생성자, 필드 주입 방식을 모두 지원한다. 먼저 생성자를 통한 주입을 시도하고, 실패하면 필드 주입을 시도한다.

##### 따라서, @Autowired와 @InjectMocks는 각각 Spring의 빈 주입과 Mockito의 Mock 주입에 사용되므로, 사용하는 컨텍스트에 따라 적절한 어노테이션을 선택해야 한다

    
#### @AutoConfigureMybatis 
1. @AutoConfigureMybatis는 Spring Boot 테스트에서 MyBatis 설정을 자동으로 구성하는 데 사용되는 어노테이션이다. 
2. 이 어노테이션을 사용하면, MyBatis와 관련된 빈(bean)들이 자동으로 Spring 애플리케이션 컨텍스트에 등록된다.  
3. 이 어노테이션은 테스트 클래스에 적용되며, 이를 통해 MyBatis 매퍼, SqlSessionFactory, SqlSessionTemplate 등의 빈이 자동으로 생성되고 구성된다. 
4. 이렇게 하면 테스트 코드에서 데이터베이스와의 상호작용을 테스트하는 데 필요한 설정을 수동으로 할 필요가 없다.  
5. 따라서, @AutoConfigureMybatis 어노테이션은 MyBatis를 사용하는 Spring Boot 애플리케이션의 테스트를 작성할 때 매우 유용하다. 
6. 이 어노테이션을 사용하면, MyBatis 설정을 쉽게 테스트 환경에 통합할 수 있다.


#### doReturn().when()과 given().willReturn()
- doReturn().when()과 given().willReturn()은 모두 Mockito 테스트 프레임워크에서 제공하는 메서드로, 테스트 대상 객체의 메서드 호출에 대한 반환값을 설정하는 데 사용된다.
- 두 메서드 모두 비슷한 기능을 제공하지만, 사용 방식과 적용되는 상황에 약간의 차이가 있다. 
##### doReturn().when()
1. doReturn().when()은 Mockito의 전통적인 방식으로, void 메서드에 대한 모킹이 필요한 경우에 주로 사용된다.
2. 이 방식은 메서드 호출을 먼저 실행하지 않고, 반환값을 설정할 수 있다. 따라서 실제 메서드가 호출되지 않아도 될 때 유용하다.
- 예: doReturn("mocked value").when(mockObject).methodCall();

##### given().willReturn()
1. iven().willReturn()은 BDD(Behavior-Driven Development) 스타일의 Mockito를 사용할 때 주로 사용된다.
2. 이 방식은 테스트를 작성하는 방식을 '상태' 기반에서 '행동' 기반으로 바꾸려는 BDD의 철학을 반영한다.
3. given().willReturn()은 실제 메서드 호출을 먼저 실행하므로, 실제 메서드가 호출되어도 문제가 없는 경우에 사용됩니다.
- 예: given(mockObject.methodCall()).willReturn("mocked value");

#### 따라서, doReturn().when()과 given().willReturn()은 각각의 테스트 상황과 개발자의 선호에 따라 적절하게 선택하여 사용하면 된다.

#### 행동 주도 개발(Behavior-Driven Development, BDD)은 개발자, QA, 비기술적 참가자 또는 비즈니스 참가자 간의 협업을 장려하는 소프트웨어 개발 방법론이다. - 추후 기회가 되면 알아보는 걸로...
