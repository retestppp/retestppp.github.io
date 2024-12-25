---
layout: post
title:  "[TDD 1] - TDD 개념과 설정"
description: "TDD 개념과 설정에 대해 알아보자."
date:   2024-12-20 21:20:00 +0900
categories: study
tags: [Back end]
img-tag: study
---

# TDD(Test-driven devlopment) - 테스트 주도 개발 - 1
1. 짧은 개발 사이클을 반복하는 소프트웨어 개발프로세스 중 하나 이다. 
2. 개발자는 먼저 요구사항을 검증하는 자동화된 테스트 케이스를 작성한다. 
3. 그리고 테스트 케이스를 통과하기 위한 최소한의 코드를 생성한다. 
4. 마지막으로 작성한 코드를 표준에 맞도록 리펙토링 한다.  
### 기존 개발
![alt text](../../assets/img/study-img/TDD/TDD01.png)
### TDD
![alt text](../../assets/img/study-img/TDD/TDD02.png)
### 즉 TDD는 개발을 하기전에 테스트 코드를 작성하고 해당 테스트를 통과 한 코드들만 개발코드로 추가하는 것이다
<br>

# TDD 장단점

## 장점 
- 보다 튼튼한 객체 지향적인 코드 생산이 가능해진다. 
    - TDD는 코드의 재사용 보장을 명시하므로 TDD를 통한 소프트웨어 개발 시 기능 별 철저한 모듈화가 이루어 진다. 
    - 이는 종속성과 의존성이 낮은 모듈로 조합된 소프트웨어 개발을 가능하게 하며 필요에 따라 모듈을 추가하거나 제거해도 소프트웨어 전체 구조에 영향을 미치지 않게 된다. 
- 코드를 작성하기전 설계에 대해 구체적으로 작성이 가능하다.
    - 테스트 코드를 먼저 작성하기 때문에 개발자가 지금 무엇을 해야 하는지 분명히 정의하고 개발을 시작하게 된다. 또한 테스트 시나리오를 작성하면서 다양한 예외사항에 대해 생각해 볼 수 있다. 이는 개발 진행 중 소프트웨어의 전반적인 설계가 변경되는 일을 방지할 수 있다.
- 오류에 대한 신속한 파악이 가능하고, 디버깅 시간을 단축시킨다. 
    - 단위 테스트와 같은 장점으로 TDD는 자동화 된 유닛 테스팅을 전제하므로 특정 버그를 손 쉽게 찾아낼 수 있다.     
- 문서 대체가 가능하다.
    - 주로 Si 프로젝트 진행 과정에서 어떤 요소들이 테스트 되었는지 테스트 정의서를 만든다. 이것은 단순 통합테스트 문서에 지나지 않는다. 하지만 TDD를 하게 될 경우 테스팅을 자동화 시킴과 동시에 보다 정확한 테스트 근거를 산출 할 수 있다. 
    
 <!-- ***top, right, bottom, left, z-index 속성은 아무런 영향을 주지 못한다.***
    - Two 에 Top:20, Left:20 속성을 주었다.  
    - 하지만 아무런 영향을 받지 않고 일반적으로 배치.  -->
<br>

## 단점
- 생산성이 저하된다. 
    - 단기적으로 봤을 때 테스트 코드를 작성하는 시간이 소모된다.
    - 처음부터 2개의 코드를 작성하고 중간중간 테스트를 하면서 고쳐 나가야 하기 때문이다.
    - TDD 방식의 개발 시간은 일반적인 개발 방식에 비해 대략 10~30%정도 늘어난다. 
- 100%의 안정성을 보장해주지 않는다.


## TDD 개발 방법 순서
1. 실패하는 작은 단위 테스트를 작성한다. 처음에는 컴파일조차 되지 않을 수 있다.
2. 빨리 테스트를 통과하기 위해 프로덕션 코드를 작성한다. 이를 위해 정답이 아닌 가짜 구현 등을 작성할 수도 있다.
3. 그 다음의 테스트 코드를 작성한다. 실패 테스트가 없을 경우에만 성공 테스트를 작성한다.
4. 새로운 테스트를 통과하기 위해 프로덕션 코드를 추가 또는 수정한다.
5. 1~4단계를 반복하여 실패/성공의 모든 테스트 케이스를 작성한다.
6. 개발된 코드들에 대해 모든 중복을 제거하며 리팩토링 한다.   

<br>

<!-- <div class="box" id="one">One</div>
<div class="box box-position-relative box-top-20 box-left-20" id="two">Two</div>
<div class="box" id="three">Three</div> -->

<br>

## 테스트 코드

### 테스트 종류
- 단위 : 기능 하나한의 테스트 
- 통합 : 단위테스트를 시스템이 녹여서 전체적으로 테스트 하는 것

### Junit
- ava의 표준 테스팅 프레임워크입니다. Spring Boot는 JUnit 4와 JUnit Jupiter(JUnit 5)를 지원합니다.

### @Test
- @Test 어노테이션은 자바에서 단위 테스트 프레임워크인 JUnit을 사용할 때, 특정 메소드가 단위 테스트를 위한 메소드임을 나타내는 데 사용 된다.
- 이 어노테이션이 적용된 메소드는 테스트 실행 시 JUnit에 의해 자동으로 호출되며, 이를 통해 개발자는 해당 메소드 안에 정의된 조건들이 올바르게 동작하는지 검증할 수 있다.
- JUnit 4와 JUnit 5에서 @Test 어노테이션의 사용 방법은 약간 다르다.
    - JUnit 4: @Test 어노테이션은 org.junit.Test 패키지에 속해 있으며, JUnit 4에서 테스트 메소드를 정의할 때 사용된다.
    - JUnit 5(Jupiter): JUnit 5에서는 @Test 어노테이션이 org.junit.jupiter.api.Test 패키지에 속해 있다. JUnit 5는 Jupiter 테스트 엔진을 사용하여 테스트를 실행하며, JUnit 5의 기능을 완전히 활용하기 위해 이 어노테이션을 사용한다.
 - 보통 void 반환 타입을 가지며, 파라미터를 받지 않는다.   
 - 각 테스트 메소드는 독립적으로 실행되며, 다른 테스트 메소드의 실행 결과에 영향을 받지 않아야 한다.
 - @Test 어노테이션을 통해 단위 테스트를 구성함으로써, 개발자는 소프트웨어의 각 부분이 예상대로 동작하는지 빠르고 효율적으로 검증할 수 있다.

### @Mock
- @Mock은 Mockito 프레임워크에서 제공하는 어노테이션으로, 객체의 모의(Mock) 버전을 생성하는 데 사용된다. 
- 이를 통해 실제 의존성 대신 가짜 객체를 사용하여 단위 테스트를 단순화하고, 테스트 대상이 외부 시스템이나 서비스와의 상호작용 없이 독립적으로 실행될 수 있도록 할 수 있다.
- 모의 객체(Mock Object)란 주로 객체 지향 프로그래밍으로 개발한 프로그램을 테스트할 경우 테스트를 수행할 모듈과 연결되는 외부의 다른 서비스나 모듈들을 실제 사용하는 모듈을 사용하지 않고 실제의 모듈을 "흉내"내는 "가짜" 모듈을 작성하여 테스트의 효용성을 높이는 데 사용하는 객체이다. 
- 사용자 인터페이스(UI)나 데이터베이스 테스트 등과 같이 자동화된 테스트를 수행하기 어려운 때 널리 사용된다

### @DisplayName
- @Test 어노테이션과 함께 사용하는 것으로 이름을 바꿔준다. 
![alt text](../../assets/img/study-img/TDD/TDD03.png)
![alt text](../../assets/img/study-img/TDD/TDD04.png)


### assert 메소드
- 주로 단위 테스트에서 사용된다. 이러한 메소드들은 JUnit, TestNG 또는 AssertJ와 같은 테스팅 프레임워크에서 제공되며, 테스트의 예상 결과를 실제 결과와 비교하는 데 사용된다. 
### assert 메소드들의 종류
#### Junit 관련 assert 메소드
1. assertEquals(expected, actual): 두 객체가 같은지 확인합니다.
2. assertNotEquals(expected, actual): 두 객체가 다른지 확인합니다.
3. assertTrue(condition): 조건이 참인지 확인합니다.
4. assertFalse(condition): 조건이 거짓인지 확인합니다.
5. assertNull(object): 객체가 null인지 확인합니다.
6. assertNotNull(object): 객체가 null이 아닌지 확인합니다.
7. assertSame(expected, actual): 두 객체 참조가 동일한 객체를 가리키는지 확인합니다.
8. assertNotSame(expected, actual): 두 객체 참조가 서로 다른 객체를 가리키는지 확인합니다.
9. assertArrayEquals(expectedArray, actualArray): 두 배열이 같은지 확인합니다.
10. assertIterableEquals(expectedIterable, actualIterable): 두 iterable이 순서대로 같은 요소를 가지는지 확인합니다.
11. assertThrows(expectedType, executable): 실행할 때 예상하는 예외 유형이 발생하는지 확인합니다.
    
#### AssertJ
- AssertJ는 Java 개발자를 위한 풍부한 플루언트(fluent) 인터페이스를 제공하는 라이브러리이다. 
- 이를 통해 단위 테스트에서 보다 표현력 있는 방식으로 조건(assertions)을 작성할 수 있게 된다. 
- AssertJ는 JUnit 또는 TestNG와 같은 테스트 프레임워크와 함께 사용되며, 테스트 코드의 가독성과 유지보수성을 크게 향상시키는 것을 목표 한다.

#### AssertJ 메소드 
1. assertThat(actual).isEqualTo(expected): 객체가 예상 값과 같은지 확인합니다.
2. assertThat(actual).isNotEqualTo(expected): 객체가 예상 값과 다른지 확인합니다.
3. assertThat(actual).isTrue(): 조건이 참인지 확인합니다.
4. assertThat(actual).isFalse(): 조건이 거짓인지 확인합니다.
5. assertThat(actual).isNull(): 객체가 null인지 확인합니다.
6. assertThat(actual).isNotNull(): 객체가 null이 아닌지 확인합니다.
7. assertThat(actual).isSameAs(expected): 두 객체 참조가 동일한지 확인합니다.
8. assertThat(actual).isNotSameAs(expected): 두 객체 참조가 서로 다른지 확인합니다.
9. assertThat(actual).hasSize(expectedSize): 컬렉션이나 배열의 크기가 예상 크기와 같은지 확인합니다.
10. assertThatThrownBy(throwingCallable).isInstanceOf(expectedType): 코드 블록 실행 시 특정 예외가 발생하는지 확인합니다.

## @Autowired - Logger logger;  vs      @Slf4j - log
*** 실행시 로그를 기록하기 위한 로그 기법 ***
### @Autowired Logger
1. logger의 경우  @Autowired 어노테이션을 사용하여 Spring의 Dependency Injection(DI) 기능을 통해 자동으로 주입됩니다. 
2. 그러나 Logger 타입의 빈이 Spring 컨텍스트에 등록되어 있지 않기 때문에, 이 방식은 에러를 발생시킬수 있다. 
3. 일반적으로 Logger 인스턴스는 Spring 컨테이너에 의해 관리되는 빈으로 등록되지 않는다.
4. Logger를 @Autowired로 주입하는 방법은 적절하지 않다. 
5. Logger는 보통 직접 인스턴스화하거나 정적 팩토리 메소드를 통해 생성한다.

### @Slf4j - log 
1. 변수는 Lombok의 @Slf4j 어노테이션을 사용하여 자동으로 생성된다. 
3. @Slf4j는 Lombok 라이브러리가 제공하는 어노테이션으로, 이를 클래스에 적용하면 Lombok이 컴파일 타임에 log라는 이름의 Logger 인스턴스를 자동으로 생성한다.
2. 생성되는 log 인스턴스는 SLF4J의 Logger 인터페이스를 구현한 객체이다.
3. @Slf4j를 사용하면 별도의 Logger 인스턴스 생성 코드를 작성하지 않아도 되므로, 코드를 더 깔끔하게 유지할 수 있다

### 차이점
1. 초기화 방식: logger는 Spring의 @Autowired를 사용해 주입하려 했으나, 적절하지 않은 방식이고, log는 Lombok의 @Slf4j 어노테이션을 통해 자동으로 생성된다.
2. 사용 방식: log 변수를 사용하는 것이 더 권장되는 방식이다. Lombok을 사용하면 로거 인스턴스를 수동으로 생성할 필요 없이, 간단하게 로깅 기능을 클래스에 추가할 수 있다.

### 결론
1. logger 변수의 사용이 적절하지 않으며, 대신 log를 사용하는 것이 바람직하다. 
2. @Autowired 어노테이션을 제거하고, Lombok의 @Slf4j 어노테이션만을 사용하여 로깅을 수행하는 것이 좋다. 
3. logger 변수에 대한 참조를 모두 log로 변경하여 일관된 로깅 방식을 사용하는 것을 권장된다.
4. 단 logger를 사용하려면 아래처럼 선언해서 사용할 수 있다. 
![alt text](../../assets/img/study-img/TDD/TDD05.png)

<br><br>
- 너무 길어져서 다음 포스팅으로 넘어가겠습니다.