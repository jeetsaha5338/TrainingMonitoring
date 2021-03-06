package com.example.exptraining.controller;

import com.example.exptraining.model.Topic;
import com.example.exptraining.repository.TopicRepository;
import com.example.exptraining.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/Training/Topic")
@CrossOrigin(origins = "*")
public class TopicController {

    @Autowired
    private TopicService topicService;
    @Autowired
    private TopicRepository topicRepository;

    @PostMapping("/addTopic")
    public String saveTopic(@RequestBody Topic topic){
        Random random = new Random();
        int randomID = 100 + random.nextInt(20);
        while(topicRepository.findById(randomID).orElse(null) != null){
            randomID = 100 + random.nextInt(20);
        }
        topic.setId(randomID);
        return topicService.saveTopic(topic);
    }

    @PostMapping("/addRandomTopic/{count}")
    public String addRandomTopic(@PathVariable("count") int count){
        Topic topic = new Topic();
        List<String> tempList = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            topic.setId(100+i);
            topic.setTopicName("React");
            topic.setCategory("Technical");
            topic.setDuration(4);
            topic.setStartDate("10-04-2019");
            topic.setEndDate("23-06-2019");
            topic.setTrainerType("Internal");
            tempList.clear();tempList.add("Jeet");tempList.add("Suman");
            topic.setTrainers(tempList);
            tempList.clear();tempList.add("Rahul");tempList.add("Ankit");
            topic.setAttendees(tempList);
            topic.setTeamName("Verbo");
            topic.setRemarks("Good");
            topicService.saveTopic(topic);
        }
        for (int i = 0; i < count; i++) {
            topic.setId(200+i);
            topic.setTopicName("JIRA");
            topic.setCategory("Organizational");
            topic.setDuration(5.5);
            topic.setStartDate("04-11-2019");
            topic.setEndDate("18-02-2020");
            topic.setTrainerType("External");
            tempList.clear();tempList.add("Youtube");tempList.add("Udemy");
            topic.setTrainers(tempList);
            tempList.clear();tempList.add("Saikat");tempList.add("Amit");
            topic.setAttendees(tempList);
            topic.setTeamName("OCC");
            topic.setRemarks("Nice");
            topicService.saveTopic(topic);
        }
        return count*2+" Topics Added";
    }

    @GetMapping("/getTopics")
    public List<Topic> getTopics(){
        return topicService.getTopics();
    }

    @GetMapping("/getTopic/{id}")
    public Topic getTopic(@PathVariable("id") int id){
        return topicService.getTopic(id);
    }

    @PostMapping("/deleteTopic/{id}")
    public String deleteTopic(@PathVariable("id") int id){
        return topicService.deleteTopic(id);
    }

    @PostMapping("/updateTopic")
    public String updateTopic(@RequestBody Topic topic){
        return topicService.updateTopic(topic);
    }
}

