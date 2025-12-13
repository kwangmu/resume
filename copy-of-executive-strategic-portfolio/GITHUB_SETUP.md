# GitHub 연결 및 배포 가이드

## 📋 단계별 가이드

### 1단계: GitHub 저장소 생성

1. GitHub.com에 로그인
2. 우측 상단의 **+** 버튼 클릭 → **New repository** 선택
3. 저장소 설정:
   - **Repository name**: `copy-of-executive-strategic-portfolio` (또는 원하는 이름)
   - **Description**: (선택사항) "Executive Strategic Portfolio"
   - **Visibility**: Public 또는 Private 선택
   - **⚠️ 중요**: README, .gitignore, license는 **추가하지 않습니다** (이미 있음)
4. **Create repository** 클릭

### 2단계: 프로젝트를 Git 저장소로 초기화

프로젝트 폴더에서 다음 명령어를 실행하세요:

```bash
# 프로젝트 디렉토리로 이동
cd copy-of-executive-strategic-portfolio

# Git 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: Executive Portfolio with GitHub Actions"

# 메인 브랜치로 설정
git branch -M main
```

### 3단계: GitHub 저장소와 연결

```bash
# GitHub 저장소 URL 추가 (YOUR_USERNAME을 본인의 GitHub 사용자명으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/copy-of-executive-strategic-portfolio.git

# 또는 SSH를 사용하는 경우:
# git remote add origin git@github.com:YOUR_USERNAME/copy-of-executive-strategic-portfolio.git

# 원격 저장소 확인
git remote -v
```

### 4단계: 코드를 GitHub에 푸시

```bash
# GitHub에 푸시
git push -u origin main
```

### 5단계: GitHub Pages 설정

1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Build and deployment** 섹션에서:
   - **Source**: **GitHub Actions** 선택
   - (자동으로 워크플로우가 감지됩니다)
5. 저장할 필요 없음 (워크플로우가 자동으로 배포)

### 6단계: GitHub Actions 활성화 확인

1. 저장소의 **Actions** 탭으로 이동
2. 첫 번째 워크플로우 실행이 자동으로 시작됩니다
3. 워크플로우가 완료될 때까지 기다립니다 (약 2-3분)
4. 완료되면 녹색 체크 표시가 나타납니다

### 7단계: 배포 확인

배포가 완료되면 다음 URL에서 사이트를 확인할 수 있습니다:

```
https://YOUR_USERNAME.github.io/copy-of-executive-strategic-portfolio/
```

또는 저장소의 **Settings** > **Pages**에서 배포된 URL을 확인할 수 있습니다.

---

## 🔄 자동 배포

이제부터는:
- `main` 브랜치에 코드를 푸시할 때마다 자동으로 배포됩니다
- 배포 상태는 **Actions** 탭에서 확인할 수 있습니다

---

## ⚙️ 저장소 이름 변경 시

저장소 이름을 변경한 경우, `vite.config.ts` 파일을 수정해야 합니다:

```typescript
const repoName = 'your-new-repo-name';
```

그리고 다시 빌드하고 푸시하세요:

```bash
git add vite.config.ts
git commit -m "Update repo name in vite config"
git push
```

---

## 🐛 문제 해결

### Actions가 실행되지 않을 때
1. **Actions** 탭에서 워크플로우가 활성화되어 있는지 확인
2. 저장소의 **Settings** > **Actions** > **General**에서 Actions가 활성화되어 있는지 확인

### 배포가 실패할 때
1. **Actions** 탭에서 실패한 워크플로우 클릭
2. 빌드 로그를 확인하여 오류 원인 파악
3. 일반적인 오류:
   - Node.js 버전 문제
   - 의존성 설치 실패
   - 빌드 오류

### 페이지가 404 에러를 보여줄 때
1. `vite.config.ts`의 `repoName`이 저장소 이름과 일치하는지 확인
2. 브라우저 캐시 삭제 후 다시 시도
3. 배포가 완료되었는지 확인 (몇 분 소요될 수 있음)

---

## 📝 추가 정보

- 배포된 사이트는 HTTPS로 자동 제공됩니다
- 커스텀 도메인을 사용하려면 GitHub Pages 설정에서 도메인을 추가할 수 있습니다
- Private 저장소도 GitHub Pro/Team/Enterprise 플랜에서는 배포 가능합니다

