#Set the base image to use
FROM gcc:latest

#Copy the C program into the container
COPY Program2_JesseDeBok.c .

#Compile the C program 
RUN gcc -o Program2_JesseDeBok Program2_JesseDeBok.c

#Set the command to run when the container starts
CMD ["./Program2_JesseDeBok"]