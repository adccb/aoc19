(ns day-01.core-test
  (:require [clojure.test :refer :all]
            [day-01.core :refer :all]
            [clojure.string :as str]
            [clojure.java.io :as io]))

(deftest test-fuel-required
  (testing "gets the right answer"
    (is (= (fuel-required 12) 2))
    (is (= (fuel-required 14) 2))
    (is (= (fuel-required 1969) 654))
    (is (= (fuel-required 100756) 33583))))

(deftest test-main
  (testing "gets the right answer"
    (let [ raw_inputs (slurp (io/resource "inputs.txt"))
           sanitized_inputs (str/split raw_inputs #"\s+") ]
      (is (= (int (-main sanitized_inputs)) 3273471)))))
