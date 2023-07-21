package com.Touristo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Touristo.Entity.Feedback;

public interface FeedbackRepo extends JpaRepository<Feedback, Integer> {

}
