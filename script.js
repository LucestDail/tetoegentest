class TetoEgenTest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.userGender = '';
        this.questions = this.getQuestions();
        this.results = this.getResults();
        
        this.initializeEventListeners();
    }

    getQuestions() {
        return [
            // 1단계: 리더십과 주도성
            {
                text: "나는 그룹에서 리더 역할을 맡는 것을 좋아한다.",
                category: "leadership",
                tetoWeight: 1.2,
                egenWeight: 0.3
            },
            // 2단계: 의사소통 스타일
            {
                text: "나는 직설적이고 솔직한 대화를 선호한다.",
                category: "communication",
                tetoWeight: 1.0,
                egenWeight: 0.5
            },
            // 3단계: 감정 표현
            {
                text: "나는 감정을 솔직하게 표현하는 편이다.",
                category: "emotion",
                tetoWeight: 0.8,
                egenWeight: 1.2
            },
            // 4단계: 갈등 해결
            {
                text: "갈등이 생기면 정면으로 해결하려고 한다.",
                category: "conflict",
                tetoWeight: 1.1,
                egenWeight: 0.4
            },
            // 5단계: 경쟁과 도전
            {
                text: "나는 경쟁을 즐기고 도전적인 상황을 선호한다.",
                category: "competition",
                tetoWeight: 1.3,
                egenWeight: 0.2
            },
            // 6단계: 공감 능력
            {
                text: "다른 사람의 감정을 잘 이해하고 공감한다.",
                category: "empathy",
                tetoWeight: 0.3,
                egenWeight: 1.4
            },
            // 7단계: 의사결정
            {
                text: "나는 빠르고 확신에 찬 결정을 내린다.",
                category: "decision",
                tetoWeight: 1.1,
                egenWeight: 0.6
            },
            // 8단계: 관계 지향성
            {
                text: "나는 인간관계를 매우 중요하게 생각한다.",
                category: "relationship",
                tetoWeight: 0.5,
                egenWeight: 1.3
            },
            // 9단계: 외모와 스타일
            {
                text: "나는 외모와 패션에 신경을 많이 쓴다.",
                category: "appearance",
                tetoWeight: 0.4,
                egenWeight: 1.1
            },
            // 10단계: 안정성 추구
            {
                text: "나는 안정적이고 평화로운 환경을 선호한다.",
                category: "stability",
                tetoWeight: 0.3,
                egenWeight: 1.2
            },
            // 11단계: 독립성
            {
                text: "나는 독립적으로 일하는 것을 좋아한다.",
                category: "independence",
                tetoWeight: 1.0,
                egenWeight: 0.4
            },
            // 12단계: 감성적 성향
            {
                text: "나는 예술이나 문학 같은 감성적인 것에 관심이 많다.",
                category: "artistic",
                tetoWeight: 0.2,
                egenWeight: 1.3
            }
        ];
    }

    getResults() {
        return {
            tetoMale: {
                title: "테토남 (테스토스테론 남성)",
                shortTitle: "테토남",
                description: "당신은 강한 리더십과 카리스마를 가진 테토남 성향입니다. 주도적이고 결단력 있는 성격으로, 목표 지향적이며 경쟁을 즐기는 타입입니다. 직설적이고 솔직한 소통을 선호하며, 문제 해결에 있어 정면 돌파를 시도합니다. 자신감이 넘치고 존재감이 큰 편이며, 연애에서도 리드하는 스타일입니다.",
                characteristics: [
                    "강한 리더십과 카리스마",
                    "주도적이고 결단력 있는 성격",
                    "목표 지향적이며 경쟁을 즐김",
                    "직설적이고 솔직한 소통",
                    "문제 해결에 정면 돌파",
                    "자신감이 넘치고 존재감이 큼",
                    "연애에서 리드하는 스타일"
                ]
            },
            tetoFemale: {
                title: "테토녀 (테스토스테론 여성)",
                shortTitle: "테토녀",
                description: "당신은 자기주장이 강하고 독립적인 테토녀 성향입니다. 카리스마가 있고 직설적이며, 추진력이 넘치는 타입입니다. 논리적이고 합리적인 사고를 하며, 연애에서도 주도권을 잡는 스타일입니다. 도전적이고 모험을 즐기며, 갈등을 피하지 않고 정면 돌파하는 성격입니다.",
                characteristics: [
                    "자기주장이 강하고 독립적",
                    "카리스마가 있고 직설적",
                    "추진력이 넘치는 타입",
                    "논리적이고 합리적인 사고",
                    "연애에서 주도권을 잡는 스타일",
                    "도전적이고 모험을 즐김",
                    "갈등을 피하지 않고 정면 돌파"
                ]
            },
            egenMale: {
                title: "에겐남 (에스트로겐 남성)",
                shortTitle: "에겐남",
                description: "당신은 감성적이고 섬세한 에겐남 성향입니다. 공감 능력이 뛰어나고 부드러운 말투를 가진 타입입니다. 배려심이 깊고 갈등을 피하여 조화를 중시합니다. 감정 표현이 풍부하며 상대방의 감정을 잘 읽습니다. 외모와 옷차림에 신경을 쓰고, 연애에서도 섬세한 배려를 보이는 성격입니다.",
                characteristics: [
                    "감성적이고 섬세함",
                    "공감 능력이 뛰어남",
                    "부드러운 말투와 태도",
                    "배려심이 깊음",
                    "갈등을 피하여 조화를 중시",
                    "감정 표현이 풍부함",
                    "상대방의 감정을 잘 읽음",
                    "외모와 옷차림에 신경을 씀",
                    "연애에서 섬세한 배려"
                ]
            },
            egenFemale: {
                title: "에겐녀 (에스트로겐 여성)",
                shortTitle: "에겐녀",
                description: "당신은 감성적이고 섬세한 에겐녀 성향입니다. 공감 능력이 뛰어나고 관계 중심적인 타입입니다. 갈등을 피하고 부드럽게 상황을 정리하며, 여성스러운 패션을 선호합니다. 감정 표현이 자연스럽고 상대방의 감정을 잘 읽어 배려합니다. 안정감 있는 관계를 추구하고 섬세한 스타일을 즐기는 성격입니다.",
                characteristics: [
                    "감성적이고 섬세함",
                    "공감 능력이 뛰어남",
                    "관계 중심적인 타입",
                    "갈등을 피하고 부드럽게 상황 정리",
                    "여성스러운 패션을 선호",
                    "감정 표현이 자연스러움",
                    "상대방의 감정을 잘 읽어 배려",
                    "안정감 있는 관계를 추구",
                    "섬세한 스타일을 즐김"
                ]
            }
        };
    }

    initializeEventListeners() {
        // 성별 선택 버튼
        document.querySelectorAll('.gender-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.userGender = e.target.dataset.gender;
                this.startTest();
            });
        });

        // 답변 선택 버튼
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const value = parseInt(e.target.dataset.value);
                this.answerQuestion(value);
            });
        });

        // 다시 테스트하기 버튼
        document.getElementById('restart-btn').addEventListener('click', () => {
            this.restart();
        });
    }

    startTest() {
        this.showScreen('test-screen');
        this.displayQuestion();
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        document.getElementById('question-text').textContent = question.text;
        
        // 진행률 업데이트
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        document.querySelector('.progress-fill').style.width = progress + '%';
        document.querySelector('.progress-text').textContent = `${this.currentQuestion + 1} / ${this.questions.length}`;
    }

    answerQuestion(value) {
        this.answers.push(value);
        this.currentQuestion++;

        if (this.currentQuestion < this.questions.length) {
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }

    calculateScores() {
        let tetoScore = 0;
        let egenScore = 0;
        const questionScores = [];

        this.questions.forEach((question, index) => {
            const answer = this.answers[index];
            const tetoPoints = (answer - 3) * question.tetoWeight;
            const egenPoints = (answer - 3) * question.egenWeight;
            
            tetoScore += tetoPoints;
            egenScore += egenPoints;

            questionScores.push({
                question: question.text,
                category: question.category,
                answer: answer,
                tetoPoints: tetoPoints,
                egenPoints: egenPoints,
                tetoWeight: question.tetoWeight,
                egenWeight: question.egenWeight
            });
        });

        // 점수 정규화 (0-100 범위)
        const maxScore = 12 * 2 * 1.4; // 최대 가능 점수
        tetoScore = Math.max(0, Math.min(100, ((tetoScore + maxScore) / (2 * maxScore)) * 100));
        egenScore = Math.max(0, Math.min(100, ((egenScore + maxScore) / (2 * maxScore)) * 100));

        return { tetoScore, egenScore, questionScores };
    }

    determineResult(scores) {
        const { tetoScore, egenScore } = scores;
        
        if (this.userGender === 'male') {
            return tetoScore > egenScore ? 'tetoMale' : 'egenMale';
        } else {
            return tetoScore > egenScore ? 'tetoFemale' : 'egenFemale';
        }
    }

    getStrengthLevel(score) {
        if (score >= 80) return { level: "매우 강함", color: "#e53e3e", class: "very-strong" };
        if (score >= 60) return { level: "강함", color: "#dd6b20", class: "strong" };
        if (score >= 40) return { level: "보통", color: "#d69e2e", class: "moderate" };
        if (score >= 20) return { level: "약함", color: "#38a169", class: "weak" };
        return { level: "매우 약함", color: "#2b6cb0", class: "very-weak" };
    }

    showResults() {
        const scores = this.calculateScores();
        const resultType = this.determineResult(scores);
        const result = this.results[resultType];
        const tetoStrength = this.getStrengthLevel(scores.tetoScore);
        const egenStrength = this.getStrengthLevel(scores.egenScore);

        // 결과 제목 설정
        document.getElementById('result-title').textContent = result.title;
        document.getElementById('result-description').textContent = result.description;

        // 점수 표시
        document.getElementById('teto-percent').textContent = Math.round(scores.tetoScore) + '%';
        document.getElementById('egen-percent').textContent = Math.round(scores.egenScore) + '%';
        
        // 강도 표시
        document.getElementById('teto-strength').textContent = tetoStrength.level;
        document.getElementById('egen-strength').textContent = egenStrength.level;
        document.getElementById('teto-strength').className = `strength-badge ${tetoStrength.class}`;
        document.getElementById('egen-strength').className = `strength-badge ${egenStrength.class}`;

        // 점수 바 애니메이션
        setTimeout(() => {
            document.getElementById('teto-score').style.width = scores.tetoScore + '%';
            document.getElementById('egen-score').style.width = scores.egenScore + '%';
        }, 100);

        // 상세 분석 생성
        this.generateDetailedAnalysis(scores, result);

        this.showScreen('result-screen');
    }

    generateDetailedAnalysis(scores, result) {
        const { questionScores } = scores;
        
        // 상위/하위 성향 질문들
        const tetoQuestions = questionScores
            .filter(q => q.tetoPoints > 0)
            .sort((a, b) => b.tetoPoints - a.tetoPoints)
            .slice(0, 3);
        
        const egenQuestions = questionScores
            .filter(q => q.egenPoints > 0)
            .sort((a, b) => b.egenPoints - a.egenPoints)
            .slice(0, 3);

        // 상세 분석 HTML 생성
        let analysisHTML = `
            <div class="analysis-section">
                <h4>📊 상세 분석</h4>
                <div class="analysis-grid">
                    <div class="analysis-card">
                        <h5>테토 성향 분석</h5>
                        <p class="score-detail">총점: <strong>${Math.round(scores.tetoScore)}점</strong></p>
                        <p class="strength-detail">강도: <span class="strength-badge ${this.getStrengthLevel(scores.tetoScore).class}">${this.getStrengthLevel(scores.tetoScore).level}</span></p>
                        <div class="top-traits">
                            <h6>주요 특징:</h6>
                            <ul>
                                ${tetoQuestions.map(q => `<li>${q.question} (${q.tetoPoints > 0 ? '+' : ''}${q.tetoPoints.toFixed(1)}점)</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="analysis-card">
                        <h5>에겐 성향 분석</h5>
                        <p class="score-detail">총점: <strong>${Math.round(scores.egenScore)}점</strong></p>
                        <p class="strength-detail">강도: <span class="strength-badge ${this.getStrengthLevel(scores.egenScore).class}">${this.getStrengthLevel(scores.egenScore).level}</span></p>
                        <div class="top-traits">
                            <h6>주요 특징:</h6>
                            <ul>
                                ${egenQuestions.map(q => `<li>${q.question} (${q.egenPoints > 0 ? '+' : ''}${q.egenPoints.toFixed(1)}점)</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // 성격 특징 추가
        analysisHTML += `
            <div class="characteristics-section">
                <h4>🎯 성격 특징</h4>
                <div class="characteristics-grid">
                    ${result.characteristics.map(char => `<div class="characteristic-item">• ${char}</div>`).join('')}
                </div>
            </div>
        `;

        // 질문별 점수 상세 내역
        analysisHTML += `
            <div class="question-details-section">
                <h4>📝 질문별 상세 점수</h4>
                <div class="question-details">
                    ${questionScores.map((q, index) => `
                        <div class="question-detail-item">
                            <div class="question-number">Q${index + 1}</div>
                            <div class="question-content">
                                <p class="question-text">${q.question}</p>
                                <div class="question-scores">
                                    <span class="score teto-score">테토: ${q.tetoPoints > 0 ? '+' : ''}${q.tetoPoints.toFixed(1)}점</span>
                                    <span class="score egen-score">에겐: ${q.egenPoints > 0 ? '+' : ''}${q.egenPoints.toFixed(1)}점</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        document.getElementById('detailed-analysis').innerHTML = analysisHTML;
    }

    restart() {
        this.currentQuestion = 0;
        this.answers = [];
        this.userGender = '';
        this.showScreen('start-screen');
        
        // 점수 바 초기화
        document.getElementById('teto-score').style.width = '0%';
        document.getElementById('egen-score').style.width = '0%';
    }
}

// 페이지 로드 시 테스트 시작
document.addEventListener('DOMContentLoaded', () => {
    new TetoEgenTest();
}); 