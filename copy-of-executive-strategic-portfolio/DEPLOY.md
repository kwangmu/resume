# GitHub Pages 배포 가이드

이 프로젝트를 GitHub Pages에 배포하는 방법을 안내합니다.

## 방법 1: GitHub Actions를 사용한 자동 배포 (권장)

### 1단계: GitHub 저장소 생성

1. GitHub에 로그인하고 새 저장소를 생성합니다.
   - 저장소 이름: `copy-of-executive-strategic-portfolio` (또는 원하는 이름)
   - Public 또는 Private 선택
   - README, .gitignore, license는 추가하지 않습니다 (이미 있으므로)

### 2단계: 프로젝트를 GitHub에 푸시

```bash
# 프로젝트 디렉토리로 이동
cd copy-of-executive-strategic-portfolio

# Git 초기화 (아직 안 했다면)
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit"

# GitHub 저장소 추가 (YOUR_USERNAME을 본인의 GitHub 사용자명으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/copy-of-executive-strategic-portfolio.git

# 메인 브랜치로 푸시
git branch -M main
git push -u origin main
```

### 3단계: GitHub Pages 설정

1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - **Deploy from a branch** 선택
   - **Branch**: `gh-pages` 선택 (또는 GitHub Actions 사용 시 자동 설정됨)
   - **Folder**: `/ (root)` 선택
5. **Save** 클릭

### 4단계: GitHub Actions 활성화

1. 저장소의 **Actions** 탭으로 이동
2. 워크플로우가 자동으로 실행됩니다
3. 배포가 완료되면 (약 2-3분 소요) 다음 URL에서 확인할 수 있습니다:
   ```
   https://YOUR_USERNAME.github.io/copy-of-executive-strategic-portfolio/
   ```

### 5단계: 자동 배포 확인

- `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다
- 배포 상태는 **Actions** 탭에서 확인할 수 있습니다

---

## 방법 2: gh-pages 패키지를 사용한 수동 배포

### 1단계: gh-pages 패키지 설치

```bash
npm install --save-dev gh-pages
```

### 2단계: 배포 실행

```bash
npm run deploy
```

이 명령어는:
1. 프로젝트를 빌드합니다 (`npm run build`)
2. `dist` 폴더를 `gh-pages` 브랜치에 푸시합니다

### 3단계: GitHub Pages 설정

1. GitHub 저장소의 **Settings** > **Pages**로 이동
2. **Source**를 `gh-pages` 브랜치로 설정
3. 저장 후 몇 분 후에 사이트가 활성화됩니다

---

## 중요 사항

### Base 경로 설정

현재 `vite.config.ts`에 다음 설정이 되어 있습니다:

```typescript
base: process.env.NODE_ENV === 'production' ? '/copy-of-executive-strategic-portfolio/' : '/',
```

**저장소 이름을 변경한 경우**, `vite.config.ts`의 `base` 경로도 변경해야 합니다.

예를 들어, 저장소 이름이 `my-portfolio`라면:
```typescript
base: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '/',
```

### 커스텀 도메인 사용

커스텀 도메인을 사용하려면:
1. `vite.config.ts`의 `base`를 `'/'`로 변경
2. GitHub Pages 설정에서 커스텀 도메인 추가
3. 도메인에 DNS 레코드 설정

---

## 문제 해결

### 배포 후 페이지가 보이지 않을 때

1. **Actions** 탭에서 배포 상태 확인
2. 빌드 로그에서 오류 확인
3. `base` 경로가 올바른지 확인
4. 브라우저 캐시 삭제 후 다시 시도

### 이미지가 보이지 않을 때

- `public` 폴더의 파일들은 `/copy-of-executive-strategic-portfolio/파일명` 경로로 접근됩니다
- 코드에서 이미지 경로가 올바른지 확인하세요

### 404 에러가 발생할 때

- GitHub Pages는 SPA(Single Page Application)를 완벽하게 지원하지 않을 수 있습니다
- 필요시 `404.html` 파일을 추가하거나 GitHub Pages의 리다이렉트 기능을 사용하세요

---

## 배포 확인

배포가 완료되면 다음 URL에서 확인할 수 있습니다:

```
https://YOUR_USERNAME.github.io/copy-of-executive-strategic-portfolio/
```

배포 상태는 저장소의 **Settings** > **Pages**에서 확인할 수 있습니다.

