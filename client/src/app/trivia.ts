export class Trivia {
    constructor(
        public question: String = '',
        public answer: String = '',
        public fakeAnswer1: String = '',
        public fakeAnswer2: String = '',
        public options: Array<String> = []
    ){}
}
