---
layout: post
title: "[GitHub Blog - 1] GitHub Blog 시작 - Ruby설치"
description: "GitHub 블로그 개발 순서와 목표. Front End 공부와 개발 포트폴리오를 만들어 보자."
date: 2024-10-30 16:00:00 +0900
categories: develop
tags: [blog, Front-End]
img-tag: blog
---

1. Github 에 리포지토리를 만든다.
2. ![alt text](/assets/img/post-img/start-git-blog-ruby//assets/img/post-img/start-git-blog-ruby/image-0.png)
3. 이름은 본인 계정명.github.io 로 만든다.
4. Visual StudioCode에서 깃 클론을 받고 해당 폴더를 연다.
5. 루트에 README.md를 추가하고 커밋하고 푸시한다.
6. ![alt text](/assets/img/post-img/start-git-blog-ruby/image-1.png)
7. 루비를 다운받는다. https://rubyinstaller.org/downloads/archives/ 여기서 Ruby+Devkit 3.0.4-1 (/assets/img/post-img/start-git-blog-ruby/x64) 을 받고 실행해서 엔터만 쳐서 설치한다.
8. ![alt text](/assets/img/post-img/start-git-blog-ruby/image-2.png)
9. 설치 후 루비 버전 체크 ruby -v 8.
10. ![alt text](/assets/img/post-img/start-git-blog-ruby/image-3.png)
11. 본인 깃 블로그 접속 https://본인계정명.github.io/ 접속: https://retestppp.github.io/
12. ![alt text](/assets/img/post-img/start-git-blog-ruby/image-4.png)
13. 인덱스 페이지 추가

```
<html>
<head>
    <title>Home</title>
</head>
<body>
    <h1>Home</h1>
    <p>환영합니다. 깃 블로그 시작에 오신걸</p>
    <p>Welcome to the home page.</p>
    <p><a href="about.php">About</a></p>
</html>
```

14. ![alt text](/assets/img/post-img/start-git-blog-ruby/image-5.png)
15. 깃 블로그 새로고침 해서 확인
16. ![alt text](/assets/img/post-img/start-git-blog-ruby/image-6.png)
17. Git bash를 열고 https://github.com/martinkang/martinkang.github.io.git 을 클론 받는다. git clone https://github.com/martinkang/martinkang.github.io.git 입력
18. 위의 리포지토리는 코딩독학님께서 만든것을 사용하는 것이다.
19. ![alt text](/assets/img/post-img/start-git-blog-ruby/image-7.png)
20. 받아진 파일들중 .git 폴더만 빼고 위에서 만든 개인 리포지토리와 연결된 파일에 복사 붙여넣는다.
21. ![alt text](/assets/img/post-img/start-git-blog-ruby/image-8.png)
22. 그리고 변경사항을 커밋하고 푸시한다.
23. CMD 창에서 본인의 리포지토리와 연결된 폴더로 이동한다.
24. ![alt text](/assets/img/post-img/start-git-blog-ruby/image-9.png)
25. Bundler 다운받기(/assets/img/post-img/start-git-blog-ruby/버전 2.3.1) gem install bundler:2.3.1
26. ![alt text](/assets/img/post-img/start-git-blog-ruby/image-10.png)
27. bundle install 하기
28. ![alt text](/assets/img/post-img/start-git-blog-ruby/image-11.png)
29. jekyll 을 다운받기 gem install jekyll bundle
30. ![alt text](/assets/img/post-img/start-git-blog-ruby/image-12.png)
31. ![alt text](/assets/img/post-img/start-git-blog-ruby/image-13.png)
32. 로컬로 서버 실행 하기 bundle exec jekyll serve --watch
33. ![alt text](/assets/img/post-img/start-git-blog-ruby/image-14.png)
34. http://127.0.0.1:4000 에 접속
35. ![alt text](/assets/img/post-img/start-git-blog-ruby/image-15.png)

```
MSYS2 could not be found. Please run 'ridk install'
or download and install MSYS2 manually from https://msys2.github.io/

C:\Users\kwangjinpyo>ruby -version
ruby 3.3.5 (/assets/img/post-img/start-git-blog-ruby/2024-09-03 revision ef084cc8f4) [x64-mingw-ucrt]
-e:1:in `<main>': undefined local variable or method `rsion' for main (/assets/img/post-img/start-git-blog-ruby/NameError)

rsion
^^^^^

C:\Users\kwangjinpyo>gem install jekyll bundle
Fetching unicode-display_width-2.6.0.gem
Fetching rouge-4.4.0.gem
Fetching terminal-table-3.0.2.gem
Fetching safe_yaml-1.0.5.gem
Fetching mercenary-0.4.0.gem
Fetching webrick-1.8.2.gem
Fetching pathutil-0.16.2.gem
Fetching forwardable-extended-2.6.0.gem
Fetching liquid-4.0.4.gem
Fetching kramdown-2.4.0.gem
Fetching kramdown-parser-gfm-1.1.0.gem
Fetching ffi-1.17.0-x64-mingw-ucrt.gem
Fetching rb-inotify-0.11.1.gem
Fetching rb-fsevent-0.11.2.gem
Fetching listen-3.9.0.gem
Fetching jekyll-watch-2.2.1.gem
Fetching google-protobuf-4.28.3-x64-mingw-ucrt.gem
Fetching sass-embedded-1.80.4-x64-mingw-ucrt.gem
Fetching jekyll-sass-converter-3.0.0.gem
Fetching concurrent-ruby-1.3.4.gem
Fetching i18n-1.14.6.gem
Fetching http_parser.rb-0.8.0.gem
Fetching eventmachine-1.2.7.gem
Fetching em-websocket-0.5.3.gem
Fetching jekyll-4.3.4.gem
Fetching colorator-1.1.0.gem
Fetching public_suffix-6.0.1.gem
Fetching addressable-2.8.7.gem
Successfully installed webrick-1.8.2
Successfully installed unicode-display_width-2.6.0
Successfully installed terminal-table-3.0.2
Successfully installed safe_yaml-1.0.5
Successfully installed rouge-4.4.0
Successfully installed forwardable-extended-2.6.0
Successfully installed pathutil-0.16.2
Successfully installed mercenary-0.4.0
Successfully installed liquid-4.0.4
Successfully installed kramdown-2.4.0
Successfully installed kramdown-parser-gfm-1.1.0
Successfully installed ffi-1.17.0-x64-mingw-ucrt
Successfully installed rb-inotify-0.11.1
Successfully installed rb-fsevent-0.11.2
Successfully installed listen-3.9.0
Successfully installed jekyll-watch-2.2.1
Successfully installed google-protobuf-4.28.3-x64-mingw-ucrt
Successfully installed sass-embedded-1.80.4-x64-mingw-ucrt
Successfully installed jekyll-sass-converter-3.0.0
Successfully installed concurrent-ruby-1.3.4
PSA: I18n will be dropping support for Ruby < 3.2 in the next major release (/assets/img/post-img/start-git-blog-ruby/April 2025), due to Ruby's end of life for 3.1 and below (/assets/img/post-img/start-git-blog-ruby/https://endoflife.date/ruby). Please upgrade to Ruby 3.2 or newer by April 2025 to continue using future versions of this gem.
Successfully installed i18n-1.14.6
MSYS2 could not be found. Please run 'ridk install'
or download and install MSYS2 manually from https://msys2.github.io/

C:\Users\kwangjinpyo>
```

Headless CMS 블로그 만들기 https://duinaru.github.io/posts/2020-09-02-make-blog-with-netlifycms-netlify/
미리 알아두어야 할 내용 1. 정적 사이트 생성기로 만든 블로그는 markdown형식의 파일로 글을 관리하고 매번 빌드해서 배포 해주어야 하죠. 이를 쉽게 하기위해 Netlify CMS 와 Netlify 를 넣어보았습니다. 2. Netlify CMS
a. Netlify CMS, Forestry.io와 같이 정적 사이트의 cms는 여러 가지가 있죠.
b. Frontend Interfaces with Hugo 3. Netlify CMS 는 망하고 decap-cms로 대체되었다.

Headless CMS 블로그 만들기 1. 위에서 만든 프로젝트의 루트에 admin 폴더를 만들고 index.html과 config.yml 파일을 만든다. 2.

    3. admin/index.html 파일 내용

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ReteestPPP Content Manager</title>
      </head>
      <body>
        <!-- Include the script that builds the page and powers Netlify CMS -->
        <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <script>
          if (/assets/img/post-img/start-git-blog-ruby/window.netlifyIdentity) {
            window.netlifyIdentity.on(/assets/img/post-img/start-git-blog-ruby/"init", (/assets/img/post-img/start-git-blog-ruby/user) => {
              if (/assets/img/post-img/start-git-blog-ruby/!user) {
                window.netlifyIdentity.on(/assets/img/post-img/start-git-blog-ruby/"login", (/assets/img/post-img/start-git-blog-ruby/) => {
                  document.location.href = "/admin/";
                });
              }
            });
          }
        </script>
      </body>
    </html>

    4. admin/config.yml 파일 내용

    backend:
      name: git-gateway
      repo: "retestppp/retestppp.github.io" # GitHub 사용자명과 저장소명
      branch: main # 콘텐츠가 저장될 브랜치
    media_folder: "assets/img" # Folder where images will be uploaded
    public_folder: "/assets/img" # Path to access images in posts
    collections:
      - name: "bugs"
        label: "Bugs"
        folder: "_posts/Bugs"
        create: true
        slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
        fields:
          - { label: "Layout", name: "layout", widget: "hidden", default: "post" }
          - { label: "Title", name: "title", widget: "string" }
          - { label: "Description", name: "description", widget: "string" }
          - {
              label: "Date",
              name: "date",
              widget: "datetime",
              dateFormat: "YYYY-MM-DD",
              timeFormat: "HH:mm:ss Z",
              default: "{{now}}",
            }
          - {
              label: "Categories",
              name: "categories",
              widget: "hidden",
              default: bugs,
            }
          - { label: "Keyword", name: "keyword", widget: "list", allow_add: true }
          - {
              label: "Tags",
              name: "tags",
              widget: "select",
              multiple: true,
              options:
                [
                  github,
                  blog,
                  Front-End,
                  Back-End,
                  jekyll,
                  html,
                  css,
                  SAPUI5,
                  CAP,
                  Java,
                  JavaScript,
                ],
            }
          - {
              label: "Image Tag",
              name: "img-tag",
              widget: "select",
              options: [blog, github, jekyll, html, css, study],
            }
          - { label: "Body", name: "body", widget: "markdown" }
      - name: "develop"
        label: "Develop"
        folder: "_posts/Develop"
        create: true
        slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
        fields:
          - { label: "Layout", name: "layout", widget: "hidden", default: "post" }
          - { label: "Title", name: "title", widget: "string" }
          - { label: "Description", name: "description", widget: "string" }
          - {
              label: "Date",
              name: "date",
              widget: "datetime",
              dateFormat: "YYYY-MM-DD",
              timeFormat: "HH:mm:ss Z",
              default: "{{now}}",
            }
          - {
              label: "Categories",
              name: "categories",
              widget: "hidden",
              default: develop,
            }
          - { label: "Keyword", name: "keyword", widget: "list", allow_add: true }
          - {
              label: "Tags",
              name: "tags",
              widget: "select",
              multiple: true,
              options:
                [
                  github,
                  blog,
                  Front-End,
                  Back-End,
                  jekyll,
                  html,
                  css,
                  SAPUI5,
                  CAP,
                  Java,
                  JavaScript,
                ],
            }
          - {
              label: "Image Tag",
              name: "img-tag",
              widget: "select",
              options: [blog, github, jekyll, html, css, study],
            }
          - { label: "Body", name: "body", widget: "markdown" }
      - name: "study"
        label: "Study"
        folder: "_posts/Study"
        create: true
        slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
        fields:
          - { label: "Layout", name: "layout", widget: "hidden", default: "post" }
          - { label: "Title", name: "title", widget: "string" }
          - { label: "Description", name: "description", widget: "string" }
          - {
              label: "Date",
              name: "date",
              widget: "datetime",
              dateFormat: "YYYY-MM-DD",
              timeFormat: "HH:mm:ss Z",
              default: "{{now}}",
            }
          - {
              label: "Categories",
              name: "categories",
              widget: "hidden",
              default: study,
            }
          - { label: "Keyword", name: "keyword", widget: "list", allow_add: true }
          - {
              label: "Tags",
              name: "tags",
              widget: "select",
              multiple: true,
              options:
                [
                  github,
                  blog,
                  Front-End,
                  Back-End,
                  jekyll,
                  html,
                  css,
                  SAPUI5,
                  CAP,
                  Java,
                  JavaScript,
                ],
            }
          - {
              label: "Image Tag",
              name: "img-tag",
              widget: "select",
              options: [blog, github, jekyll, html, css, study],
            }
          - { label: "Body", name: "body", widget: "markdown" }
          # - { label: "image", name: "image", widget: "image" }
    5. 주의사항
        a. Index.html 파일에서 가장 중요한 부분은 script부분이다.
        b.
        c. https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js 의 경우 컨텐츠를 블로그 폴더가 아닌 앞으로 생성할 블로그의 컨텐츠 관리페이지에서 사용하기 위한 스크립트로 decap-cms 3.0 을 가져와야한다. 위에서도 이야기 했지만 netlify-cms로 하면 한글지원이 안되고 키보드 반응도 이상하기 때문에 이미 망해버린 Netlify CMS  를 사용하지 않도록 주의가 필요하다.
        d. https://identity.netlify.com/v1/netlify-identity-widget.js 의 경우 컨텐츠 관리 페이지를 들어갈 때 https://app.netlify.com/ 가입한 계정으로 로그인을 해야 하는데 그 기능 사용하기 위해서 사용한다.

    6. https://app.netlify.com/ 에 가입을 진행한다.  (/assets/img/post-img/start-git-blog-ruby/본인은 이메일을 사용함)
    7.
    8. 가입을 하고 나면 https://app.netlify.com/teams/pkjhj9746/sites 과 같이  https://app.netlify.com/teams/계정명/sites 로 이동하게 된다.
    9. 새로운 사이트를 만들기 위해 Add new site 클릭
    10.
    11. 이미 만들어진 깃블로그 프로젝트를 올릴 것이기 때문에 Import an existing project 선택
    12.
    13. 깃허브에 있는 프로젝트를 기반으로 만들 것이기 때문에 Github 선택
    14.
    15. 연결하고자 하는 깃허브 프로젝트 리포지토리를 선택
    16.
    17. 필요한 입력들을 입력하고 Deploy 리포지토리(/assets/img/post-img/start-git-blog-ruby/retestppp.github.io) 클릭
    18.
    19. 이때 중요한 것이 브랜치를 어떤 브랜치로 할 것인지 정해야 한다. 오늘날 기본값음 main이다.
    20. Build command도 그냥 변경하지 않고 그대로 두면 된다.
    21.

    22.
    23. 만들어진 사이트 리스트중 방금 만든 것을 선택
    24.
    25. 여기서 깃 블로그와 연동된 사이트의 상태를 확인 할 수 있다.
    26. 컨탠츠 추가를 위해서 사이트 URL 클릭
    27.
    28. 이렇게 해서 들어가면 본인이 만든 블로그와 같은 블로그로 들어가 진다.
    29.
    30. 주의 URL이 기존에 깃 블로그와는 다르게 표시됨
    31.
    32. 컨텐츠 추가는 home URL에 /admin을 붙여서 들어가서 나오는 화면에서 하면 된다. 그리고 netlify에서 들어간 URL/admin에서만 가능하고 깃블로그URL/admin에서는 로그인 진행이 안된다.
    33. 로그인을 하기
    34.

    35.
    36. 로그인 이후에 원하는 카테고리 선택후 "New 카테고리"를 선택하고 블로그에 추가할 글을 작성한다.
    37.
    38. 내용을 입력하고 Publish를 클릭하면 입력한 글이 MD 파일로 저장되여 깃허브에 커밋되고 바로 푸시가 되고 배포가 된다.
    39.
    40. 단 이때 주의 해야 할 것이 VS Code에서 git pull을 받아야 한다는 것이다. 그래야 추후 작업할 때 충돌이 발생하지 않는다.
    41.
