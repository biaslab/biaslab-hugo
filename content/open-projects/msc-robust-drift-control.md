+++
title = "MSc project: Robust Drift Control for ASML Scanning Manipulators"
date = "2025-10-22"

description = "Control systems: design a robust, learning-based drift prediction and control model for ASML TwinScan lithography systems."
external_link = ""
vacancy_id = "robust_drift_control"
+++


A student will design a robust, learning-based drift prediction and control model for ASML TwinScan lithography systems that integrates physics and data-driven methods to handle non-uniform measurements, time-varying uncertainties, and diverse drift dynamics while outperforming the current nominal controller.

{{< figure src="/img/proposals/robust_drift_control.png" title="State-of-the-art static event-based controller. Figure courtesy of ASML." class="center" height="100px" >}}

## Project positioning
(raaja please update/confirm)
This project is sponsored by ASML. You will be working in the Bayesian Intelligent Autonomous Systems lab ([BIASlab](https://biaslab.github.io{BIASlab)) at TU Eindhoven. BIASlab develops probabilistic models and inference algorithms for signal processing and control problems. This graduation project is a part of a larger research initiative towards AIF agents for robot locomotion.

### Supervision
- Weekly progress meetings with Raaja Ganapathy Subramanian.
- Periodic progress meetings with BIASlab researchers.
- The student should prepare for meetings in advance, e.g. with slides or notebooks.
- Developed software will be open source, accessible through [BIASlab's github](https://github.com/biaslab/) organization. It should be legible / usable for future students.

## Student task description
TwinScan lithography systems are used at a very high-speed to produce integrated circuits which requires sub-nanometer accuracy and precision. However, during the operation the system drifts—after all its just a combination of metals and materials, causing a negative impact on both the (sub-)nanometer-scale positioning and getting plauged by different classes of uncertainties (like changes in boundary condition, operation sequence induced errors, etc). The current drift control is nothing more than a nominal exponential moving average. Clearly, this poses several challenging control problems mainly because
- the measurements are not ideal. Thus being prone to
    - measurement noises which are of time-varying nature (i.e., colored).
    - uncertainties creeping the performance.
    - unmodelled physics impacting the prediction accuracies.
- these drifts often possesses different dynamical nature over time per product per machine. So using a nominal controller is close to impossible/non-optimal. Further to control lag, we measure very frequently, every day to 3-days which is a cost for customer.

In this project, the student will use a combination of physics and data-based prediction techniques to design a dynamical learning-based prediction model that can provide robust performance.

### Concrete tasks
The robust controller needs to have several intrinsic characteristics:
- Deal with non-uniform measurements in order to update the predictor’s (internal) states.
- Should be a global controller to deal with different classes of drifts while guaranteeing robust performance
- Possesses smart decision making capability by learning from past in order to deal with sequence induced uncertainties

The performance, advantages and disadvantages needs to be compared with benchmark and real-measurement data, and against the current state-of-the-art controller. Finally, the student is expected to finish the internship with a concise report/manuscript and talk(s) to be held at ASML and the university.

## Timeline
(raaja please provide) 
