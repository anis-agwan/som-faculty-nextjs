import { GUIDE_ENUMS } from "@/app/enums/guide_enums";

export const guideData = {
  sections: [
    {
      section: 1,
      sectitle: "Opening & Introduction",
      description: [
        `Provide a description to the candidate of the process that they will be going through.`,
        `Greet the candidate and introduce yourself. Try to set them at ease. Provide them with a description of the process that he/she will be going through over the next 2.5 - 3 hours.`,
        `Make sure he/she has the participant handout with information on the two leadership
      simulations. Ask if he/she has any questions.`,
      ],
      subtitle: "OPENING: Tell Me About You",
      subDesc: [
        `Tell the candidate, "I'd like you to take about 3 - 5 minutes and tell me a little bit about
      you. Let me know anything that you feel would help me get to know you better. If
      possible, however, please avoid topics such as politics and religion. I may ask you some
      follow-up questions."`,
        `Allow the candidate approximately 5 minutes to tell you about him/her. When you get a
      chance, make overall ratings of the following competencies:
      Making a Positive Impact
      Oral Communication`,
        `Transition to the next section.`,
      ],
    },

    {
      section: 2,
      sectitle: "Leadership Simulation 1",
      description: [
        `Instruct the candidate to read over the following information. When he/she is finished,
        he/she will be playing the role described in the instructions. You will also ask him/her a
        number of questions regarding the situation. Have the candidate tell you when he/she is
        ready.`,
        `While the candidate is reading over the situation, make your ratings of the candidate on
        the evaluation form.`,
      ],
      subtitle: "Instructions for Participant",
      generalInfo: [
        `You've just been selected as the production manager for a new manufacturing firm. The
        firm will be operating in a team-based format although there is currently very little
        structure. You have 5 group leaders that report to you. Each group leader oversees 3 - 5
        teams, each consisting of 4 - 8 team members. Currently, there are no team leaders in
        place for the teams; in fact, the team members are currently being selected and will not be in the facility for about two weeks. Manufacturing machinery has been delivered and
        final installations are ongoing now. Plans are to begin production within three weeks.`,
        `You have never met your group leaders although you've heard that they are technically
        competent with at least some supervisory experience. This is a brand new facility and as
        yet there are no clear vision and strategies to implement the teams, to determine how
        things should run, what the rules are, etc. As it relates to the manufacturing side of the
        plant, establishing those things is your responsibility.`,
      ],
      task: `You have about 5 minutes to think about this situation and determine how you would like
      to approach it. You will be meeting with one of your group leaders in about 5 minutes
      and you need to give him/her an overview of your philosophy for the facility, what
      general things you want to cover, short and/or long term plans/goals, etc. Essentially you
      need to let him/her know your general plans, style of leadership, expectations, etc. You
      can ask questions of the group leader if you like, although he/she may not be able to
      answer all your questions. You will be able to spend about 10 minutes with the group
      leader.`,
      keepInMind: {
        desc: `There are no right or wrong answers. You are free to structure this meeting, the facility,
        etc., any way that you feel most comfortable. Treat the group leader as if he/she actually
        were one of your group leaders.`,
        subtitle: "Role Player Instructions:",
        subdesc: `In this simulation, you will be playing the role of a Group Leader who reports to the
        participant, who is assuming the role of manufacturing manager.`,
        info: [],
      },
    },
    {
      section: 3,
      sectitle: "Past Behavior Questions",
    },
    {
      section: 4,
      sectitle: "Leadership Simulation 2",
    },
    {
      section: 5,
      sectitle: "Wrap Up and Closing",
    },
  ],
};
