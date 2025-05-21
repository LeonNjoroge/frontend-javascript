interface MajorCredits{
    credits: number;
    readonly brand: "MajorCredits";
}

interface MinorCredits{
    credits: number;
    readonly brand: "MinorCredits";
}


const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): MajorCredits => ({
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits"
});

const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): MinorCredits => ({
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits"
})